const menu = document.getElementById('hamburger');

menu.addEventListener('click', ()=>{
    console.log("working");
    
});

function openSide(){
    let side = document.getElementById('navigation');
    side.style.width = "50%";

    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');

    one.style.display = "none";
    two.style.transform = "rotate(45deg) translate(4px, 4px)";
    three.style.transform = "rotate(-45deg) translate(3px, -3px)";


}

