const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="component/post-rating/rating.css">
<hr class="line-break" />
<div class="userRating">
  <div class="ratingWrapper">
    <p class="displayRating"></p>
    <div class="ratingStars">
      <span id="star1"><i class="fa fa-star"></i></span>
      <span id="star2"><i class="fa fa-star"></i></span>
      <span id="star3"><i class="fa fa-star"></i></span>
      <span id="star4"><i class="fa fa-star"></i></span>
      <span id="star5"><i class="fa fa-star"></i></span>
    </div>
  </div>
  <div class="nav-container">
    <a class="icon-list" id="comment">
      <li>Read full Article  &nbsp<i class="fa-solid fa-arrow-right"></i></li>
    </a>
  </div>
<div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
`;

class Rating extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //get rating 
    let userRating = parseInt(this.getAttribute("rating"));
    
    //render rating
    const displayRating = this.shadowRoot.querySelector('.displayRating');
    displayRating.textContent = `${userRating}`;


    //navigation when click comment
    const openPost = this.shadowRoot.getElementById("comment");
    openPost.addEventListener("click", event=>{
      window.location.href = '/post.html';
    })

    //fill star color based on rating
    const star = this.shadowRoot.querySelectorAll("span");
    for (let x = 0 ; x< userRating ; x++){
      star[x].classList.add('rated');
    }
  }
}

window.customElements.define("post-rating", Rating);
