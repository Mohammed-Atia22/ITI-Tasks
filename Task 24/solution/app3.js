let products = [
    {image:"./phone.jpg",name:"iphone",kind:"phone",price:"$1000",rating:"⭐4.5",love:"❤️0"},
    {image:"./phone.jpg",name:"iphone",kind:"phone",price:"$1000",rating:"⭐4.5",love:"❤️0"},
    {image:"./laptop.jpg",name:"laptop",kind:"laptop",price:"$1000",rating:"⭐4.5",love:"❤️0"},
    {image:"./laptop.jpg",name:"laptop",kind:"laptop",price:"$1000",rating:"⭐4.5",love:"❤️0"},
    {image:"./watch.jpg",name:"watch",kind:"accessories",price:"$1000",rating:"⭐4.5",love:"❤️0"},
    {image:"./headphone.jpg",name:"headphone",kind:"accessories",price:"$1000",rating:"⭐4.5",love:"❤️0"}
];

const all = document.querySelector(".button1");
const phone = document.querySelector(".button2");
const laptop = document.querySelector(".button3");
const accessories = document.querySelector(".button4");
const content = document.querySelector(".content");


function getData(products){
    let love;
    for(let i=0;i<products.length;i++){
        //console.log(products[i]);
        const element = document.createElement("div");
        const image = document.createElement("div");
        const img = document.createElement("img");
        img.src = products[i].image;
        img.style.cssText = `width:250px;height:200px;margin-bottom:10px`;
        image.appendChild(img);
        const name = document.createElement("div");
        name.textContent = products[i].name;
        name.style.cssText = `font-size:20px;margin-bottom:10px`;
        const price = document.createElement("div");
        price.textContent = products[i].price;
        price.style.cssText = `font-size:20px;margin-bottom:10px;color:cyan`;
        const rating = document.createElement("div");
        rating.textContent = products[i].rating;
        rating.style.cssText = `font-size:20px;margin-bottom:10px`;
        love = document.createElement("div");
        love.classList.add(`lovebtn${i}`);
        love.textContent = products[i].love;
        love.dataset.kind = products[i].kind;
        love.dataset.count = "0";
        love.style.cssText = `font-size:20px;margin-bottom:10px`;
        element.appendChild(image);
        element.appendChild(name);
        element.appendChild(price);
        element.appendChild(rating);
        element.appendChild(love);
        element.style.cssText = `background-color:lightgray;padding:20px;border-radius:20px;display:inline-block;margin-right:20px;margin-top:50px;margin-left:30px;`;
        content.appendChild(element);
        const lovebtn = document.querySelector(`.lovebtn${i}`)
        lovebtn.addEventListener("click", function() {
            (lovebtn.dataset.count)++;
            lovebtn.textContent = `❤️${lovebtn.dataset.count}`;
        });
    }
}



all.addEventListener("click",function(e){
    e.preventDefault();
    getData(products);
})

phone.addEventListener("click",function(e){
    e.preventDefault();
    const products22 = products.filter(ele => ele.kind === 'phone');
    content.innerHTML = ``;
    getData(products22);
})

laptop.addEventListener("click",function(e){
    e.preventDefault();
    const products22 = products.filter(ele => ele.kind === 'laptop');
    content.innerHTML = ``;
    getData(products22);
})

accessories.addEventListener("click",function(e){
    e.preventDefault();
    const products22 = products.filter(ele => ele.kind === 'accessories');
    content.innerHTML = ``;
    getData(products22);
})

