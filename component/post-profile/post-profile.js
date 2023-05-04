const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="component/post-profile/post-profile.css">
    <div class="profile-name-container">
        <img src="assets/profile.jpg" />
        <div>
            <p>Zheng Wu Bang</p>
            <p>
              <small class="location">Barcelona</small>
              <small> | <small>
              <small class="date">April 9 2023, 13:40 pm</small>              
            </p>
        </div>
    </div>
`;

class profile extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //get name,date and profile,location and display
    const name = this.shadowRoot.querySelector('.profile-name-container p');
    name.textContent = this.getAttribute('name');
    const date = this.shadowRoot.querySelector('.date');
    date.textContent = this.getAttribute('date');
    const profile = this.shadowRoot.querySelector('.profile-name-container img');
    profile.setAttribute("src", this.getAttribute('profile'));
    const location = this.shadowRoot.querySelector('.location');
    location.textContent = this.getAttribute('location');
  }
}

window.customElements.define("user-profile", profile);
