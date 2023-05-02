const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="component/header/header.css" />
<header class="header">
  <div class="header-container">
    <div class="logo-container">
      <img src="assets/logo.png" alt="logo for travely" />
    </div>

    <div class="title-container">
      <h2>Travely</h2>
    </div>
    <form class="searchbar-container">
      <input
        class="searchinput"
        type="search"
        placeholder="What are you looking for ?"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='What are you looking for ?'"
      />
    </form>

    <div class="icon-container">
      <ul>
        <a href="login.html"><li class="list-item"><i class="fa-solid fa-arrow-right-from-bracket"></i></li></a>
      </ul>
    </div>
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</header>
`;

class header extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("header-section", header);
