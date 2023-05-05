var modalEditProfile = document.getElementById("editModal");
var btnEditProfile = document.getElementById("edit_btn");
var spanEditProfile = modalEditProfile.querySelector(".close");
var btnDone = document.getElementById("done_button");
var profilePicInput = document.getElementById('profile-pic');
var profilePic = document.querySelector('.photo img');
//var modalPlaces = document.getElementById("placesModal");
//var btnPlaces = document.getElementById("places_btn");
//var spanPlaces = placesModal.querySelector(".close");
//var placesList = document.getElementById("places-list");
//var newItemInput = document.getElementById("new-item-input");
//var addBtn = document.getElementById("add-btn");
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
/*
btnPlaces.addEventListener("click",function(){
  modalPlaces.style.display = "block";
});

spanPlaces.addEventListener("click", function(){
  modalPlaces.style.display = "none";
});
*/

//Close the modal if user clicks on any place in the webpage except the modal
window.addEventListener("click",function(event){
  if(event.target == modalEditProfile){
    modalEditProfile.style.display = "none";
  }
/*
  if(event.target == modalPlaces){
    modalPlaces.style.display = "none";
  }
  */
})

//Clicks Done button in the edit profile modal
btnDone.addEventListener("click", function(){
    modalEditProfile.style.display = "none";
});

/*
addBtn.onclick = function() {
  var newItemInput = document.getElementById("new-item-input");
  var newItemText = newItemInput.value.trim();
  if (newItemText === "") {
    alert("Please enter a place.");
    return;
  }

  var existingItem = false;
  var listItems = placesList.getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === newItemText) {
      existingItem = true;
      break;
    }
  }

  if (existingItem) {
    alert("This place is already on the list.");
    return;
  }

  var newItem = document.createElement("li");
  var textNode = document.createTextNode(newItemText);
  newItem.appendChild(textNode);
  placesList.appendChild(newItem);
  modalPlaces.style.display = "none";
};

  // Delete an item from the list
  placesList.onclick = function(event) {
    if (event.target.tagName == "LI") {
      event.target.parentNode.removeChild(event.target);
    }
  }
*/

//Save the new information and update it in the personal information container
function saveNewInfo() {
  var usernamenew = document.getElementById("username").value;
  var emailnew = document.getElementById("email").value;
  var gendernew = document.getElementById("gender").value;
  var DOBnew = document.getElementById("DOB").value;
  var DJoinednew = document.getElementById("DJoined").value;

  var divusername = document.getElementById("namearea");
  var divemail = document.getElementById("emailarea");
  var divgender = document.getElementById("genderarea");
  var divDOB = document.getElementById("DOBarea");
  var divDJoined = document.getElementById("DJoinedarea");

  if (usernamenew.trim() == "") {
    usernamenew = divusername.innerHTML;
  }
  if (emailnew.trim() == "") {
    emailnew = divemail.innerHTML;
  }
  if (gendernew.trim() == "") {
    gendernew = divgender.innerHTML;
  }
  if (DOBnew.trim() == "") {
    DOBnew = divDOB.innerHTML;
  }
  if (DJoinednew.trim() == "") {
    DJoinednew = divDJoined.innerHTML;
  }
  
  if (!validateEmail(emailnew)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validateDate(DOBnew) || !validateDate(DJoinednew)) {
    alert("Please enter a valid date in the format YYYY-MM-DD.");
    return false;
  }

  // Update the display of the user information in the HTML
  divusername.innerHTML = usernamenew;
  divemail.innerHTML = emailnew;
  divgender.innerHTML = gendernew;
  divDOB.innerHTML = DOBnew;
  divDJoined.innerHTML = DJoinednew;
}

function validateEmail(email) {
  // Regular expression to validate email address
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateDate(date) {
  // Regular expression to validate date in the format YYYY-MM-DD
  var re = /^\d{4}-\d{2}-\d{2}$/;
  return re.test(date);
}

function displayCurrentUserInfo() {
  var divusername = document.getElementById("namearea");
  var divemail = document.getElementById("emailarea");
  var divgender = document.getElementById("genderarea");
  var divDOB = document.getElementById("DOBarea");
  var divDJoined = document.getElementById("DJoinedarea");

  var usernamenew = divusername.innerHTML;
  var emailnew = divemail.innerHTML;
  var gendernew = divgender.innerHTML;
  var DOBnew = divDOB.innerHTML;
  var DJoinednew = divDJoined.innerHTML;

  var inputUsername = document.getElementById("username");
  var inputEmail = document.getElementById("email");
  var inputGender = document.getElementById("gender");
  var inputDOB = document.getElementById("DOB");
  var inputDJoined = document.getElementById("DJoined");

  inputUsername.value = usernamenew;
  inputEmail.value = emailnew;
  inputGender.value = gendernew;
  inputDOB.value = DOBnew;
  inputDJoined.value = DJoinednew;

  inputUsername.addEventListener("mouseover", function() {
    if (inputUsername.value == usernamenew) {
      inputUsername.value = "";
    }
  });
  inputEmail.addEventListener("mouseover", function() {
    if (inputEmail.value == emailnew) {
      inputEmail.value = "";
    }
  });
  inputGender.addEventListener("mouseover", function() {
    if (inputGender.value == gendernew) {
      inputGender.value = "";
    }
  });
  inputDOB.addEventListener("mouseover", function() {
    if (inputDOB.value == DOBnew) {
      inputDOB.value = "";
    }
  });
  inputDJoined.addEventListener("mouseover", function() {
    if (inputDJoined.value == DJoinednew) {
      inputDJoined.value = "";
    }
  });

  inputUsername.addEventListener("mouseout", function() {
    if (inputUsername.value == "") {
      inputUsername.value = usernamenew;
    }
  });
  inputEmail.addEventListener("mouseout", function() {
    if (inputEmail.value == "") {
      inputEmail.value = emailnew;
    }
  });
  inputGender.addEventListener("mouseout", function() {
    if (inputGender.value == "") {
      inputGender.value = gendernew;
    }
  });
  inputDOB.addEventListener("mouseout", function() {
    if (inputDOB.value == "") {
      inputDOB.value = DOBnew;
    }
  });
  inputDJoined.addEventListener("mouseout", function() {
    if (inputDJoined.value == "") {
      inputDJoined.value = DJoinednew;
    }
  });

  inputUsername.addEventListener("click", function() {
    inputUsername.value = "";
  });
  inputEmail.addEventListener("click", function() {
    inputEmail.value = "";
  });
  inputGender.addEventListener("click", function() {
    inputGender.value = "";
  });
  inputDOB.addEventListener("click", function() {
    inputDOB.value = "";
  });
  inputDJoined.addEventListener("click", function() {
    inputDJoined.value = "";
  });
}
  
btnDelete.onclick = function(){
  if(window.confirm("Do you confirm to delete account?")){
    window.location = "register.html";
  }

}
  




   





