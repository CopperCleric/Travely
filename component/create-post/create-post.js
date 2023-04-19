const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="component/create-post/create-post.css" />
<div class="write-post-container">
<div class="profile-name-container">
  <img src="assets/profile.jpg" />
  <div>
    <p>Zheng Wu Bang</p>
    <small>content writer</small>
  </div>
</div>

<div class="post-input-container">
  <textarea
    rows="3"
    placeholder="What's on your mind, Zheng ?"
  ></textarea>
  <div class="add-post-links">
    <a href="#" class="function-container">
      <div>
        <i
          class="fa-regular fa-face-laugh-beam"
          id="icon-background"
        ></i>
      </div>
      <span>Feeling</span>
    </a>
    <a href="#" class="function-container">
      <div>
        <i class="fa-regular fa-image" id="icon-background"></i>
      </div>
      <span>Upload photo</span>
    </a>
    <a href="#" class="function-container">
      <div>
        <i class="fa-regular fa-circle-play" id="icon-background"></i>
      </div>
      <span>Upload video</span>
    </a>
  </div>
</div>
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
`;

class createPosts extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("create-post", createPosts);
