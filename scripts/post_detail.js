const comments = [ // mock data
  {
    username: 'Eren Yeager',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imageSrc: 'https://www.looper.com/img/gallery/the-surprising-number-of-titans-eren-kills-as-a-human-in-attack-on-titan/l-intro-1643171427.jpg'
  },
  {
    username: 'Reiner',
    text: 'fddfsdf dsfdfdsfdsf fsdfdsfsdfdsfsdfsfs fsfsdfdsfsd',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ruDIuDPXkGAZDENGuJmJEDhDLNHMFK6nQg&usqp=CAU'
  },
  {
    username: 'Bertholdt',
    text: 'yututyutuy fsdf ',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuiIh2DehF_SQoyKZswsl5_T4e_XT1gc1cQ&usqp=CAU'
  },
];

comments.forEach(comment => {
  // Create a new comment element
  const commentWrapper = document.createElement('div');
  commentWrapper.classList.add('commentWrapper');

  const commentPic = document.createElement('img');
  commentPic.classList.add('commentPic');
  commentPic.src = comment.imageSrc;
  commentPic.alt = 'profile pic';

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');

  const commentUserName = document.createElement('h2');
  commentUserName.classList.add('commentUserName');
  commentUserName.textContent = comment.username;

  const commentText = document.createElement('p');
  commentText.classList.add('commentText');
  commentText.textContent = comment.text;

  commentDiv.appendChild(commentUserName);
  commentDiv.appendChild(commentText);

  commentWrapper.appendChild(commentPic);
  commentWrapper.appendChild(commentDiv);

  const commentList = document.getElementById('commentList');
  commentList.appendChild(commentWrapper);
});