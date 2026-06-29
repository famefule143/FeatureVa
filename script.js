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
