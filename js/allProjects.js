import { projects } from "./projects.js";

let outputHTML = '';

let card = document.querySelector('.projects')

projects.forEach(function(assignment){

        outputHTML +=

        `<div class="card border-0" id="card">
        <img src="${assignment.imagePath}" class="card-img-top" id="cardImg" alt="...">
        <div class="card-body pt-5 pb-5">
          <h5 class="card-title fs-2">${assignment.title}</h5>
          <p class="card-text fs-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <a href="${assignment.link}" id="moreBtn" class="text-reset">read more <span><img src="./resources/img/arrow.svg" alt=""></span></a>
      </div>`
    
        
        card.innerHTML = outputHTML;
});

