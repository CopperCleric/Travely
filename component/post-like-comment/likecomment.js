const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="component/post-like-comment/likecomment.css">
<div class="like-comment-container">
    <p class="displayLikes">10010 likes</p>
    <p class="displayComments">1001 comments</p>
</div>
<hr class="line-break" />

<!-- display like,comment and share icon-->
<div class="like-comment-share-container">
<ul class="icon-list" >
  <li id="like-animation"><i class="fa-regular fa-heart"></i></li>
  <span>Likes</span>
</ul>
<ul class="icon-list">
  <li><i class="fa-regular fa-comment-dots"></i></li>
  <span>Comments</span>
</ul>

</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
`;

class likecomment extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //get data 
    let likeAmount = parseInt(this.getAttribute("like"));
    let commentAmount = parseInt(this.getAttribute("comment"));
    
    //render the data
    const displayLikes = this.shadowRoot.querySelector('.displayLikes');
    const displayComments = this.shadowRoot.querySelector('.displayComments');
    displayLikes.textContent = `${likeAmount} likes`;
    displayComments.textContent = `${commentAmount} comments`;


    //display animation when click like button
    const likeButton = this.shadowRoot.querySelector('.icon-list li');
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('clicked');
      if (likeButton.classList.contains('clicked')){
        likeAmount++;
        //console.log(likeAmount);
      }else{
        likeAmount--;
        //console.log(likeAmount);
      }

      // update the like attribute and trigger a re-render
      this.setAttribute('like', likeAmount);
      displayLikes.textContent = `${likeAmount} likes`;
    });

    
  }
}

window.customElements.define("like-comment", likecomment);
