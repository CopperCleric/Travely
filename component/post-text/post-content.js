const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="component/post-text/post-content.css" />
    <div class="read-more-container">
        <p class="post-text">
            Hey everyone! I'm currently in the beautiful city of Barcelona and
            I just had to share my experience with you all. This place is
            simply magical!
            <span class="read-more-text">
            The city is bursting with life, color, and culture.
            </span>
        </p>
    </div>
`;

class content extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    
    const text = this.getAttribute("text");
    const countWords = text.split(/(\s+)/).filter((x) => x.trim().length > 0);
    let words = "";
    if (countWords.length > 28) {

      // Divide the length of content into read more and read normal
      const readMore = document.createElement("span");
      readMore.classList.add("read-more-btn");
      readMore.textContent = "Read More...";
      this.shadowRoot
        .querySelector(".read-more-container")
        .appendChild(readMore);
      for (let x = 0; x <= 28; x++) {
        words += countWords[x] + " ";
      }
      const postText = this.shadowRoot.querySelector(".post-text");
      postText.textContent = words;
      words = "";
      for (let y = 29; y < countWords.length; y++) {
        words += countWords[y] + " ";
      }
      const moreText = document.createElement("span");
      moreText.classList.add("read-more-text");
      moreText.textContent = words;
      postText.appendChild(moreText);

      //Expand and shrink text
      const readMoreBtn = this.shadowRoot.querySelector(".read-more-btn");
      readMoreBtn.addEventListener("click", (event) => {
        const postContainer = event.target.closest(".read-more-container");
        const currentText = postContainer.querySelector(".read-more-text");
        currentText.classList.toggle("read-more-text--show");
        readMoreBtn.textContent = currentText.classList.contains(
          "read-more-text--show"
        )
          ? "Read Less..."
          : "Read More...";
      });
    } else {
      this.shadowRoot.querySelector(".post-text").textContent = text;
    }
  }
}

window.customElements.define("post-content", content);
