import { navigation } from "./navigation.js";


let outputHTML = '';

let nav = document.getElementById('navigation')

navigation.forEach(function(page){
    console.log(page);

    outputHTML +=

    `<li><a href="${page.path}" id="${page.id}" >${page.title}</a></li>`

});


nav.innerHTML = outputHTML;


// let body = document.querySelector('body');
// let color = window.getComputedStyle(body,"");
// let bgcolor = color.getPropertyValue("background-color")

// console.log(bgcolor);

// const header = document.querySelector('header');

// header.style.backgroundColor = bgcolor;
// console.log(header.style.backgroundColor);

const menu = document.getElementById('hamburger');

const side = document.getElementById('navigation');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

let toggle = false;
menu.addEventListener('click', toggleMenu)

function toggleMenu(){
    if(!toggle){
        side.style.width = "50%";
    
        one.style.transform = "rotate(45deg) translate(7px, 7px)";
        two.style.width = "0";
        three.style.transform = "rotate(-45deg) translate(7px, -7px)";

        toggle = true;

    } else{
        side.style.width = "0";
    
        two.style.width = "4em";
        one.style.transform = "rotate(0deg) translate(0px, 0px)";
        three.style.transform = "rotate(0deg) translate(0px, 0px)";

        toggle = false;

    }

}



