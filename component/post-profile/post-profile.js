const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="component/post-profile/post-profile.css">
    <div class="profile-name-container">
        <img src="assets/profile.jpg" />
        <div>
            <p>Zheng Wu Bang</p>
            <small>April 9 2023, 13:40 pm</small>
        </div>
    </div>
`;

class profile extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //get name,date and profile and display
    const name = this.shadowRoot.querySelector('.profile-name-container p');
    name.textContent = this.getAttribute('name');
    const date = this.shadowRoot.querySelector('.profile-name-container small');
    date.textContent = this.getAttribute('date');
    const profile = this.shadowRoot.querySelector('.profile-name-container img');
    profile.setAttribute("src", this.getAttribute('profile'));
  }
}

window.customElements.define("user-profile", profile);
