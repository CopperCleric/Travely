const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="component/country-card/country-card.css" />
<div class="card">
  <img src="/assets/usa-scene.jpeg" class="card-img" alt=""/>
  <div class="card-body">
      <h1 class="card-title">USA</h1>
      <p class="card-sub-title">New York City</p>
      <p class="card-info">New York is a diverse and bustling metropolis known for its iconic landmarks, world-renowned museums, vibrant culture, and thriving business scene.</p>
      <a href="#" class="btn"><i class="fa-solid fa-check"></i></a>
  </div>  
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

`

class countryCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const sceneImg = this.getAttribute("src");
        const sceneCountry = this.getAttribute("country");
        const sceneName = this.getAttribute("title");
        const sceneDescription = this.getAttribute("description");

        this.shadowRoot.querySelector(".card-img").setAttribute("src", sceneImg);
        this.shadowRoot.querySelector(".card-title").textContent = sceneCountry;
        this.shadowRoot.querySelector(".card-sub-title").textContent = sceneName;
        this.shadowRoot.querySelector(".card-info").textContent = sceneDescription;

        //animation on selected country
        const card = this.shadowRoot.querySelector(".card");
        this.shadowRoot.querySelector(".btn").addEventListener("click", ()=>{
            card.classList.toggle("card-border");
        });

    };

} 

window.customElements.define("card-country", countryCard);
