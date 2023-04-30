import { projects } from "./projects.js";

let outputHTML = '';

let card = document.querySelector('.dev')

projects.forEach(function(assignment){

    if(assignment.type === 'dev'){
        outputHTML +=

        `<a href="${assignment.link}" target="_blank" class="card" style="background-image: url('${assignment.imagePath}');">
        </a>`

        card.innerHTML = outputHTML;
    }
});

