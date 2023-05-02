var modalEditProfile = document.getElementById("editModal");
var btnEditProfile = document.getElementById("edit_btn_holder");
var spanEditProfile = document.getElementsByClassName("close")[0];
var btnDone = document.getElementById("done_button");
var profilePicInput = document.getElementById('profile-pic');
var profilePic = document.querySelector('.photo img');
var modalPlaces = document.getElementById("placesModal");
var btnPlaces = document.getElementById("places_btn");
var placesList = document.getElementById("places-list");
var newItemInput = document.getElementById("new-item-input");
var addBtn = document.getElementById("add-btn");
//var spanPlaces = document.getElementsByClassName("close")[0];

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

btnDone.addEventListener("click", function(){
    modalEditProfile.style.display = "none";
});

btnEditProfile.onclick = function(){
    modalEditProfile.style.display = "block";
}

spanEditProfile.onclick = function(){
    modalEditProfile.style.display = "none";
    
}

window.onclick = function(event){
    if(event.target == modalEditProfile){
        modalEditProfile.style.display = "none";
    }

    
}

btnPlaces.onclick = function(){
    modalPlaces.style.display = "none";
}

spanPlaces.onclick = function(){
    modalPlaces.style.display = "none";
    
}

if(event.target == modalPlaces){
    modalPlaces.style.display = "none";
}





addBtn.onclick = function() {
    var newItem = document.createElement("li");
    var textNode = document.createTextNode(newItemInput.value);
    newItem.appendChild(textNode);
    placesList.appendChild(newItem);
    modalPlaces.style.display = "none";
  }
  
  // Delete an item from the list
  placesList.onclick = function(event) {
    if (event.target.tagName == "LI") {
      event.target.parentNode.removeChild(event.target);
    }
  }

function saveNewInfo(){
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

    divusername.innerHTML =  usernamenew;
    divemail.innerHTML = emailnew;
    divgender.innerHTML = gendernew;
    divDOB.innerHTML = DOBnew;
    divDJoined.innerHTML = DJoinednew;

}


   





