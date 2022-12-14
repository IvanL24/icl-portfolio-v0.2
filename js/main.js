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


function closeSide() {
}



