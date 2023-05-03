// COMMENT SECTION
let commentsLen = 0;
const commentsText = document.getElementById("commentsText");

const refreshCommentsLength = () => {
  commentsText.textContent = `${commentsLen} comments`;
}

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

// LIKE POST FEATURE
const likesText = document.getElementById('likesText');
let likes = 69;
let isLike = false;

const refreshLike = () => {
  likesText.textContent = `${likes} likes`;
}
refreshLike();

const toggleLike = () => {
  isLike = !isLike;
  const likeIcon = document.getElementById('likeIcon');

  if(isLike) { // user like the post
    likeIcon.classList.add("isLike");
    likeIcon.classList.remove("outlinedIcon");
    likes++;
    refreshLike();
  }
  else{ // user cancel like
    likeIcon.classList.add("outlinedIcon");
    likeIcon.classList.remove("isLike");
    likes--;
    refreshLike();
  }
}


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
const editBar = document.getElementById("editBar");

const showEdit = () => {
  toggleShowOption();
  caption.style.display = "none";
  captionInput.value = caption.textContent;
  captionInput.style.display = "block";
  editBar.style.display = "flex";
}

const closeEdit = () => {
  caption.style.display = "block";
  captionInput.style.display = "none";
  editBar.style.display = "none";
}

const saveEdit = () => {
  caption.textContent = captionInput.value;
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
}


// TOGGLE OPEN AND CLOSE COMMENT
const commentList = document.getElementById("commentList");
let openComment = true;

const toggleComment = () => {
  openComment = !openComment;
  commentList.style.display = openComment ? "flex" : "none";
}

