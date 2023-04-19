const template = document.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="component/post-content-slider/slider.css">  
  <div class="slider">
    <div class="slides">
      <div class="slide fade">
        <img src="assets/profile.jpg" alt="" />
      </div>
      <div class="slide fade">
        <img src="assets/profile.jpg" alt="" />
      </div>
      <div class="slide fade">
        <img src="assets/profile.jpg" alt="" />
      </div>
      <div class="slide fade">
        <img src="assets/profile.jpg" alt="" />
      </div>
      <a class="prev">
        ❮
      </a>
      <a class="next">
        ❯
      </a>      
    </div>
  </div>
`;

class slider extends HTMLElement {
  constructor() {
    super();
    this.slideIndex = 1;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //bind ID to the post
    const postID = this.getAttribute("id");
    //console.log(postID);
    let addID = this.shadowRoot.querySelector(".slider");
    addID.setAttribute("id", postID);

    //display slides
    this.showSlides(this.slideIndex, postID);

    const prevSlide = this.shadowRoot.getElementById(postID).querySelector(".prev");
    prevSlide.addEventListener("click", () => {
      this.showSlides((this.slideIndex -= 1), postID);
    });

    const nextSlide = this.shadowRoot.getElementById(postID).querySelector(".next");
    nextSlide.addEventListener("click", () => {
      this.showSlides((this.slideIndex += 1), postID);
    });
  }

  showSlides(n, id) {
    let ids = this.shadowRoot.getElementById(id);
    let slides = ids.querySelectorAll(".slide");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
  }
}

window.customElements.define("post-slider", slider);
