const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="component/write-post-model/model.css" />
<div class="active" id="wrapper">
    <div class="popup-outer">
        <div class="popup-box ">
          <i id="close" class="bx bx-x close"></i>
          <div class="profile-text">
            <img src="/assets/profile.jpg" alt="" />
            <div class="text">
              <span class="name">Zheng Wu Bang</span>
              <span class="profession">content writer</span>
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
              <input class="file-input" type="file" name="file" hidden />
              <i class="fas fa-cloud-upload-alt"></i>
              <p>Browse File to Upload</p>
              <div class="error-message">*File type not supported</div>
            </div>
            <section class="progress-area"></section>
            <section class="uploaded-area"></section>

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
      fileInput = this.shadowRoot.querySelector(".file-input"),
      progressArea = this.shadowRoot.querySelector(".progress-area"),
      uploadedArea = this.shadowRoot.querySelector(".uploaded-area"),
      optionMenu = this.shadowRoot.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");

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

    // form click event
    form.querySelector(".upload-container").addEventListener("click", () => {
      fileInput.click();
    });

    function isAcceptedFileType(file) {
      return file.type.match("video.*") || file.type.match("image.*");
    }

    fileInput.onchange = ({ target }) => {
      let file = target.files[0]; //getting file [0] this means if user has selected multiple files then get first one only
      const errorMessage = this.shadowRoot.querySelector(
        ".upload-container .error-message"
      );
      if (!isAcceptedFileType(file)) {
        errorMessage.style.display = "block";
        return;
      } else {
        errorMessage.style.display = "none";
      }
      if (file) {
        let fileName = file.name; //getting file name
        if (fileName.length >= 12) {
          //if file name length is greater than 12 then split it and add ...
          let splitName = fileName.split(".");
          fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        uploadFile(fileName); //calling uploadFile with passing file name as an argument
      }
    };

    // file upload function
    function uploadFile(name) {
      let xhr = new XMLHttpRequest(); //creating new xhr object (AJAX)
      xhr.open("POST", "php/upload.php"); //sending post request to the specified URL
      xhr.upload.addEventListener("progress", ({ loaded, total }) => {
        //file uploading progress event
        let fileLoaded = Math.floor((loaded / total) * 100); //getting percentage of loaded file size
        let fileTotal = Math.floor(total / 1000); //gettting total file size in KB from bytes
        let fileSize;
        // if file size is less than 1024 then add only KB else convert this KB into MB
        fileTotal < 1024
          ? (fileSize = fileTotal + " KB")
          : (fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB");
        let progressHTML = `<li class="row">
                              <i class="fas fa-file-alt iconSize"></i>
                              <div class="content">
                                <div class="details">
                                  <span class="name">${name} • Uploading</span>
                                  <span class="percent">${fileLoaded}%</span>
                                </div>
                                <div class="progress-bar">
                                  <div class="progress" style="width: ${fileLoaded}%"></div>
                                </div>
                              </div>
                            </li>`;
        uploadedArea.classList.add("onprogress");
        progressArea.innerHTML = progressHTML;
        if (loaded == total) {
          progressArea.innerHTML = "";
          let uploadedHTML = `<li class="row" file="${name}">
                                <div class="content upload">
                                  <i class="fas fa-file-alt"></i>
                                  <div class="details">
                                    <span class="name">${name} • Uploaded</span>
                                    <span class="size">${fileSize}</span>
                                  </div>
                                </div>
                                <i class="fa-solid fa-xmark" id="icon-size" file="${name}" onclick="this.getRootNode().host.removeFile('${name}')"></i>
                                </li>`;
          uploadedArea.classList.remove("onprogress");
          uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML); //remove this line if you don't want to show upload history
        }
      });
      let data = new FormData(form); //FormData is an object to easily send form data
      xhr.send(data); //sending form data
    }
    // Add a click listener to the close button
    const closeButton = this.shadowRoot.querySelector("#close");
    console.log(closeButton);
    closeButton.addEventListener("click", () => {
      // Remove the modal element from the document body
      this.remove();
    });
  }

  removeFile = (name) => {
    const deleteFile = this.shadowRoot
      .querySelector(".uploaded-area")
      .querySelector(`li[file="${name}"]`);
    console.log(deleteFile);
    deleteFile.remove();
  };
}

window.customElements.define("create-post-modal", writePostModal);
