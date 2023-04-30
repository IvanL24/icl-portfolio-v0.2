import { projects } from "./projects.js";

let outputHTML = '';

let card = document.querySelector('.design')

projects.forEach(function(assignment){

    if(assignment.type === 'design'){
        outputHTML +=

        `<a href="${assignment.link}" target="_blank" class="card" style="background-image: url('${assignment.imagePath}');">
        </a>`

        card.innerHTML = outputHTML;
    }
});

