import { projects } from "./projects.js";

let outputHTML = '';

let card = document.querySelector('.projects')

console.log(projects)

projects.forEach(function(assignment){
    console.log(assignment);

    outputHTML +=

    `<a href="${assignment.link}" target="_blank" class="card" style="background-image: url('${assignment.imagePath}');">
        

    
    </a>`

});

card.innerHTML = outputHTML;