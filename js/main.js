import { projects } from "./projects.js";

let outputHTML = '';

let card = document.querySelector('.projects')

console.log(projects)

projects.forEach(function(assignment){
    console.log(assignment);

    outputHTML +=

    `<figure class="card" style="background-image: url('${assignment.imagePath}'); :hover">
        

    
    </figure>`

});

card.innerHTML = outputHTML;

