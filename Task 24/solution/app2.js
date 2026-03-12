country = document.querySelector("#country");
submit = document.querySelector("#submit");
const result5 = document.querySelector(".result");


let city = '';
let country3 = '';
submit.addEventListener("click",function(e){
    e.preventDefault();
    // console.log(country.value);
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${country.value}`)
        .then(res => res.json())
        .then(data => {
            //.latitude,data.results[0].longitude
            //console.log(data.results[0]);
            city = data.results[0].admin1;
            country3 = data.results[0].country;
            const lat = data.results[0].latitude;
            const long = data.results[0].longitude;
            return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`);
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.current_weather);
            div1 = document.createElement("div");
            span1 = document.createElement("span");
            span2 = document.createElement("span");
            span1.textContent = `${city} ,`;
            span2.textContent = ` ${country3}`;
            span1.style.cssText = `font-size:20px;`;
            span2.style.cssText = `font-size:20px;`;
            div1.appendChild(span1);
            div1.appendChild(span2);
            div2 = document.createElement("div");
            div2.textContent = `Temperature : ${data.current_weather.temperature} C`;
            div2.style.cssText = `font-size:20px;margin-top:10px`;
            div3 = document.createElement("div");
            div3.textContent = `Wind Speed : ${data.current_weather.windspeed} Km/h`;
            div3.style.cssText = `font-size:20px;margin-top:10px`;
            div4 = document.createElement("div");
            div4.textContent = `Time : ${data.current_weather.time}`;
            div4.style.cssText = `font-size:20px;margin-top:10px`;
            result5.appendChild(div1);
            result5.appendChild(div2);
            result5.appendChild(div3);
            result5.appendChild(div4);
            result5.style.cssText = `background-color:white;padding:20px;border-radius:15px`;
        })
})
