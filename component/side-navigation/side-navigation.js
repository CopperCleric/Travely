const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="component/side-navigation/side-navigation.css" />
<navbar class="sidebar">
<div class="profile-content">
  <div class="profile">
    <img src="assets/profile.jpg" />
    <div class="profile-name">Zheng Wu Bang</div>
    <hr />
    <p class="user-email">@wbzheng@gmail.com</p>
  </div>
</div>

<ul class="nav-list">
  <li>
    <a href="#">
      <i class="fa-solid fa-user"></i>
      <span class="links_name">Profile</span>
    </a>
  </li>

  <li>
    <a href="#">
      <i class="fa-solid fa-chart-simple"></i>
      <span class="links_name">User Analytics</span>
    </a>
  </li>

  <li>
    <a href="#">
      <i class="fa-solid fa-gear"></i>
      <span class="links_name">Settings</span>
    </a>
  </li>

  <li class="logout-container">
    <a href="#" class="log-out">
      <i class="fa-solid fa-right-from-bracket"></i>
      <span>Log Out</span>
    </a>
  </li>
</ul>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</navbar>
`;

class navigation extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("side-navigation", navigation);
