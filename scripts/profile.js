var modalEditProfile = document.getElementById("editModal");
var btnEditProfile = document.getElementById("edit_btn");
var spanEditProfile = modalEditProfile.querySelector(".close");
var btnDone = document.getElementById("done_button");
var profilePicInput = document.getElementById('profile-pic');
var profilePic = document.querySelector('.photo img');
var modalPlaces = document.getElementById("placesModal");
var btnPlaces = document.getElementById("places_btn");
var spanPlaces = placesModal.querySelector(".close");
var placesList = document.getElementById("places-list");
var newItemInput = document.getElementById("new-item-input");
var addBtn = document.getElementById("add-btn");

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

btnEditProfile.addEventListener("click",function(){
  modalEditProfile.style.display = "block";
});

spanEditProfile.addEventListener("click",function(){
  modalEditProfile.style.display = "none";
});

btnPlaces.addEventListener("click",function(){
  modalPlaces.style.display = "block";
});

spanPlaces.addEventListener("click", function(){
  modalPlaces.style.display = "none";
});

window.addEventListener("click",function(event){
  if(event.target == modalEditProfile){
    modalEditProfile.style.display = "none";
  }

  if(event.target == modalPlaces){
    modalPlaces.style.display = "none";
  }
})

btnDone.addEventListener("click", function(){
    modalEditProfile.style.display = "none";
});

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
  
    if (usernamenew.trim() == "" || emailnew.trim() == "" || DOBnew.trim() == "" || DJoinednew.trim() == "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    if (!validateEmail(emailnew)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (!validateDate(DOBnew) || !validateDate(DJoinednew)) {
      alert("Please enter a valid date in the format YYYY-MM-DD.");
      return false;
    }
  
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
  





   





