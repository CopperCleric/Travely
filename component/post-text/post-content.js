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
        <span class="read-more-btn">Read More..</span>
    </div>
`;

class content extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Divide the length of content into read more and read normal
    const text = this.getAttribute('text');
    
    console.log(text);
    const countWords = text.split(/(\s+)/).filter((x) => x.trim().length>0);
    // let words;
    // if (countWords.length > 20){
    //   countWords.forEach((w)=>{
    //     words = w + " ";
    //   })
    //   console.log(words);
    // }

    //Expand and shrink text
    const readMoreBtn = this.shadowRoot.querySelector('.read-more-btn');
    readMoreBtn.addEventListener('click', event => {
      const postContainer = event.target.closest('.read-more-container');
      const currentText = postContainer.querySelector('.read-more-text');
      currentText.classList.toggle('read-more-text--show');
      readMoreBtn.textContent = currentText.classList.contains('read-more-text--show') ? 'Read Less...' : 'Read More...';
    });
  }
}

window.customElements.define("post-content", content);
