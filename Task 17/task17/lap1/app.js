country = document.querySelector("#country");
submit = document.querySelector(".submit");

// submit.addEventListener("click",function(e){
//     e.preventDefault();
//     console.log(country.value);
//     country = country.value;
//     async function getData(country){
//         const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//         const data = await res.json();
//         console.log(data[0]);
//         h1 = document.createElement("h1");
//         h1.innerHTML = data[0].name;
//         document.body.appendChild(h1);
//         //getData(data[0].borders[1]);
//         async function getNeighbor(neighbor) {
//             const res1 = await fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//             const data1 = await res1.json();
//             console.log(data1);
//             h1 = document.createElement("h1");
//             h1.innerHTML = data1.name;
//             document.body.appendChild(h1);
//         }
//         getNeighbor(data[0].borders[1]);
//     }
//     getData(country);
// })

async function getdata(country){
    let res = await fetch(`https://restcountries.com/v2/name/${country.value}`);
    let data = await res.json();
    console.log(data);
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// submit.addEventListener("click",function(e){
//     e.preventDefault();
//     fetch(`https://restcountries.com/v2/name/${country.value}`)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data[0]);
//         return fetch(`https://restcountries.com/v2/alpha/${data[0].borders[1]}`);
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
// })

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

submit.addEventListener("click",function(e){
    e.preventDefault()
    fetch(`https://restcountries.com/v2/name/${country.value}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        return fetch(`https://restcountries.com/v2/alpha/${data[0].borders[1]}`);
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
})

