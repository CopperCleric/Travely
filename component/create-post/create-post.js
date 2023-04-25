const template = document.createElement("template");

template.innerHTML = `
<script type="module" src="component/write-post-model/model.js"></script>
<link rel="stylesheet" href="component/create-post/create-post.css" />
<div class="write-post-container">
<div class="profile-name-container">
  <img src="assets/profile.jpg" />
  <div class="placeholder-container">
    <p class="placeholder-text">What's on your mind?</p>
  <div>
</div>

`;

class createPosts extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //read data dynamically
    this.shadowRoot.querySelector('.profile-name-container img').setAttribute("img", this.getAttribute('profile'));

    const placeholderContainer = this.shadowRoot.querySelector('.placeholder-container');
    placeholderContainer.addEventListener('click', () => {
      const modalElement = document.createElement('create-post-modal');
      document.body.appendChild(modalElement);
    });

  }

  
}

window.customElements.define("create-post", createPosts);
