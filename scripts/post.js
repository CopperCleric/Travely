const comments = [ // mock data
  {
    username: 'Saitama',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgSrc: 'assets/post.png'
  },
  {
    username: 'Reiner',
    text: 'Wow good good',
    imgSrc: 'assets/reiner.jpeg'
  },
  {
    username: 'Bertholdt',
    text: 'Awesome place! ',
    imgSrc: 'assets/bertholdt.jpeg'
  },
];

// COMMENT SECTION
let commentsLen = 0;
const commentsText = document.getElementById("commentsText");

const refreshCommentsLength = () => {
  commentsText.textContent = `${commentsLen} comments`;
}

const addComment = (username, text, imgSrc) => { // add comment into html
  const commentWrapper = document.createElement('div');
  commentWrapper.classList.add('commentWrapper');

  const commentPic = document.createElement('img');
  commentPic.classList.add('commentPic');
  commentPic.src = imgSrc;
  commentPic.alt = 'profile pic';

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');

  const commentUserName = document.createElement('h2');
  commentUserName.classList.add('commentUserName');
  commentUserName.textContent = username;

  const commentText = document.createElement('p');
  commentText.classList.add('commentText');
  commentText.textContent = text;

  commentDiv.appendChild(commentUserName);
  commentDiv.appendChild(commentText);

  commentWrapper.appendChild(commentPic);
  commentWrapper.appendChild(commentDiv);

  const commentList = document.getElementById('commentList');
  commentList.appendChild(commentWrapper);

  commentsLen++;
  refreshCommentsLength();
}

comments.forEach(comment => { // add all comments into html
  addComment(comment.username, comment.text, comment.imgSrc);
});

// SUBMIT COMMENT
const commentInput = document.getElementById('commentInput');
const sendBtn = document.getElementById('sendBtn');

const submitComment = () => {
  const inputValue = commentInput.value;
  if(inputValue === "") return; // prevent submit when input value is empty

  addComment(
    "Eren",
    inputValue,
    "assets/eren.jpg"
  );
  commentInput.value = "";
}

commentInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    event.preventDefault();
    submitComment();
  }
});

sendBtn.addEventListener('click', () => {
  submitComment();
});



// IMAGE SLIDES
let slideIndex = 1;
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
showSlides(slideIndex);

// BACK BUTTON
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener('click', () => {
  window.location.href = '/';
});


// POPUP DROPDOWN OPTIONS
const optionsList = document.getElementById('optionsList');
let showOption = false;

const toggleShowOption = () => {
  showOption = !showOption;
  optionsList.style.display = showOption ? 'block' : 'none';
}

// EDIT POST
const caption = document.getElementById("caption");
const captionInput = document.getElementById("captionInput");
const locationText = document.getElementById("locationText");
const locationInput = document.getElementById("locationInput");
const editBar = document.getElementById("editBar");

const showEdit = () => {
  toggleShowOption();
  caption.style.display = "none";
  captionInput.value = caption.textContent;
  captionInput.style.display = "block";

  locationText.style.display = "none";
  locationInput.value = locationText.textContent;
  locationInput.style.display = "block";

  editBar.style.display = "flex";
}

const closeEdit = () => {
  caption.style.display = "block";
  captionInput.style.display = "none";

  locationText.style.display = "block";
  locationInput.style.display = "none";

  editBar.style.display = "none";
}

const saveEdit = () => {
  if(captionInput.value === "" || locationInput.value === ""){
    alert("Post description and location cannot be empty!");
    return;
  }
  caption.textContent = captionInput.value;
  locationText.textContent = locationInput.value;
  closeEdit();
}


// DELETE POST
const confirmModal = document.getElementById("confirmModal");

const showDelete = () => {
  toggleShowOption();
  confirmModal.style.display = "block";
}

const closeDelete = () => {
  confirmModal.style.display = "none";
}

const deletePost = () => {
  closeDelete();
  alert("You deleted the post");
  window.location.href = '/';
}


// TOGGLE OPEN AND CLOSE COMMENT
const commentList = document.getElementById("commentList");
let openComment = true;

const toggleComment = () => {
  openComment = !openComment;
  commentList.style.display = openComment ? "flex" : "none";
}

// RATING
const stars = document.querySelectorAll(".ratingStars span");
const clearBtn = document.getElementById("clearBtn");
let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    rating = parseInt(star.id.replace("star", ""));
    updateStars();
    console.log(`You've rated ${rating} stars!`);
  });
});

function updateStars() {
  stars.forEach((star) => { // show color for selected star
    const starRating = parseInt(star.id.replace("star", ""));
    if (starRating <= rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });

  if(rating > 0) { // show clear rating button if rating is greater than 0;
    clearBtn.style.display = "block";
  }
  else{
    clearBtn.style.display = "none";
  }
}

clearBtn.addEventListener('click', () => { // clear rating function
  rating = 0;
  updateStars();
});



