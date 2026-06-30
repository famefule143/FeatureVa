window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{
document.body.style.transition="1s";
document.body.style.opacity="1";
},200);

});

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0px)";

}

});

}); 
function filterProducts(category){
    let products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        if(category === 'all'){
            product.style.display = "block";
        }
        else if(product.getAttribute('data-category') === category){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
    });
}
function searchProducts(){

let input=document.getElementById("searchBox").value.toLowerCase();

let cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

let name=card.querySelector("h3").innerText.toLowerCase();

if(name.includes(input)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}
tsParticles.load("tsparticles",{

background:{
color:"#050505"
},

particles:{
number:{
value:120
},

color:{
value:["#FFD700","#ffffff","#00ffff"]
},

move:{
enable:true,
speed:1
},

size:{
value:{min:1,max:4}
},

opacity:{
value:0.8
},

links:{
enable:false
}

}

});
