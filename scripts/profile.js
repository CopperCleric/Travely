var modalEditProfile = document.getElementById("editModal");
var btnEditProfile = document.getElementById("edit_btn");
var spanEditProfile = modalEditProfile.querySelector(".close");
var btnDone = document.getElementById("done_button");
var profilePicInput = document.getElementById('profile-pic');
var profilePic = document.querySelector('.photo img');
var btnDelete = document.getElementById("delete_btn");

//Change profile picture
profilePicInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      profilePic.setAttribute('src', this.result);
    });
    reader.readAsDataURL(file);
  }
});

//Show edit profile modal if user clicks "Edit Profile" button
btnEditProfile.addEventListener("click",function(){
  modalEditProfile.style.display = "block";
});

//Close the modal if user clicks close icon button
spanEditProfile.addEventListener("click",function(){
  modalEditProfile.style.display = "none";
});

//Close the modal if user clicks on any place in the webpage except the modal
window.addEventListener("click",function(event){
  if(event.target == modalEditProfile){
    modalEditProfile.style.display = "none";
  }
})

//Clicks Done button in the edit profile modal
btnDone.addEventListener("click", function(){
    modalEditProfile.style.display = "none";
});

//Save the new information and update it in the personal information container
function saveNewInfo() {
  var usernamenew = document.getElementById("username").value;
  var bionew = document.getElementById("bio").value;

  var divusername = document.getElementById("namearea");
  var divBio = document.getElementById("bio_details");

  if (usernamenew.trim() == "") {
    usernamenew = divusername.innerHTML;
  }

  if(bionew.trim()==""){
    bionew = divBio.innerHTML;
  }
  
  // Update the display of the user information in the HTML
  divusername.innerHTML = usernamenew;
  divBio.innerHTML = bionew;
}

function displayCurrentUserInfo() {
  var divusername = document.getElementById("namearea");
  var divBio = document.getElementById("bio_details");

  var usernamenew = divusername.innerHTML;
  var bionew = divBio.innerHTML;

  var inputUsername = document.getElementById("username");
  var inputBio = document.getElementById("bio");

  inputUsername.value = usernamenew;
  inputBio.value = bionew;

  inputUsername.addEventListener("mouseover", function() {
    if (inputUsername.value == usernamenew) {
      inputUsername.value = "";
    }
  });

  inputBio.addEventListener("mouseover",function(){
    if(inputBio.value == bionew){
      inputBio.value = "";
    }
  });

  inputUsername.addEventListener("mouseout", function() {
    if (inputUsername.value == "") {
      inputUsername.value = usernamenew;
    }
  });
  
  inputBio.addEventListener("mouseout", function() {
    if (inputBio.value == "") {
      inputBio.value = bionew;
    }
  });

  inputUsername.addEventListener("click", function() {
    inputUsername.value = "";
  });
  
  inputBio.addEventListener("click",function(){
    inputBio.value = "";
  });
}
  
btnDelete.onclick = function(){
  if(window.confirm("Do you confirm to delete account?")){
    window.location = "register.html";
  }

}
  




   





