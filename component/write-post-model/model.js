const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="component/write-post-model/model.css" />
<div class="active" id="wrapper">
    <div class="popup-outer">
        <div class="popup-box ">
          <i id="close" class="bx bx-x close"></i>
          <div class="profile-text">
            <img class="profileImg" src="/assets/profile.jpg" alt="" />
            <div class="text">
              <span class="name">Zheng Wu Bang</span>
            </div>
          </div>
          <form action="#">

            <div class="select-menu">
            <div class="select-btn">
              <span class="sBtn-text">Country</span>
              <i class="bx bx-chevron-down"></i>
            </div>
              <ul class="options">
                <li class="option">
                  <i class="bx bx-flag" style="color: #171515;"></i>
                  <span class="option-text">Malaysia</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #E1306C;"></i>
                  <span class="option-text">Australia</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #0E76A8;"></i>
                  <span class="option-text">France</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #4267B2;"></i>
                  <span class="option-text">China</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #1DA1F2;"></i>
                  <span class="option-text">Vietnam</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #2F4F4F;"></i>
                  <span class="option-text">Egypt</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #00FF7F;"></i>
                  <span class="option-text">India</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #DC143C;"></i>
                  <span class="option-text">Italy</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #FFC0CB;"></i>
                  <span class="option-text">Japan</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #FFA500;"></i>
                  <span class="option-text">Switzerland</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #00FFFF;"></i>
                  <span class="option-text">Taiwan</span>
                </li>
                <li class="option">
                  <i class="bx bx-flag" style="color: #800080 ;"></i>
                  <span class="option-text">USA</span>
                </li>
              </ul>
            </div>
            <textarea
              spellcheck="false"
              placeholder="What's on your mind ?"
              onfocus="this.placeholder= ''"
            ></textarea>           
            <div class="upload-container">
              <output></output>
              <label class="file-label">
                Upload
                <input class="file-input" type="file" multiple="multiple" accept="image/jpeg, image/png, image/jpg, video/mp4" />
              </label>        
            </div>
            <div class="button">
              <button class="send">Post</button>
            </div>
          </form>
        </div>
      </div>
</div>
<link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
`;

class writePostModal extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const form = this.shadowRoot.querySelector("form"),
      optionMenu = this.shadowRoot.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");

    const output = form.querySelector("output");
    const input = form.querySelector("input");
    let fileArray = [];


   

    //upload files
    input.addEventListener("change", () => {
      const files = input.files;

      for (let i = 0; i < files.length; i++) {
        fileArray.push(files[i]);
      }
      displayFile();
    });

    //disable post button if text is empty
    const postButton = form.querySelector(".send");
    //console.log(postButton);
    //initially the text area is empty, so disable the button
    postButton.disabled = true;
    const textNum = this.shadowRoot.querySelector("textarea");
    textNum.addEventListener("change", () => {
      if (textNum.value.trim().length != 0) {
        postButton.disabled = false;
      }
    });

    //display the uploaded media
    function displayFile() {
      let mediaElements = "";
      fileArray.forEach((media, index) => {
        if (media.type.startsWith("image/")) {
          mediaElements += `
            <div class="image">
              <img src="${URL.createObjectURL(media)}" alt="image">
              <span onclick="this.getRootNode().host.deleteMedia(${index})">&times;</span>
            </div>
          `;
        } else if (media.type.startsWith("video/")) {
          mediaElements += `
            <div class="image">
              <video src="${URL.createObjectURL(
                media
              )}" alt="video" controls></video>
              <span onclick="this.getRootNode().host.deleteMedia(${index})">&times;</span>
            </div>
          `;
        }
      });
      output.innerHTML = mediaElements;
    }

    //delete the media that is uploaded
    this.deleteMedia = (index) => {
      fileArray.splice(index, 1);
      displayFile();
    };

    //dropdown menu
    selectBtn.addEventListener("click", () =>
      optionMenu.classList.toggle("active")
    );
    options.forEach((option) => {
      option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
      });
    });

    // Close modal
    const closeButton = this.shadowRoot.querySelector("#close");
    console.log(closeButton);
    closeButton.addEventListener("click", () => {
      // Remove the modal element from the document body
      this.remove();
    });
  }

  // is called when the element is added to the document. This way, you can be sure that the attributes 
  // are set before you try to access them.
  connectedCallback() {
    // Get the value of the 'name' attribute
    const name = this.getAttribute("name");
    // Get the value of the 'profile' attribute
    const profile = this.getAttribute("profile");

    // Render the name and profile values
    this.shadowRoot.querySelector(".name").textContent = name;
    this.shadowRoot.querySelector(".profile-text img").setAttribute("src" ,profile);
    
  }
}

window.customElements.define("create-post-modal", writePostModal);
