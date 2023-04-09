

// read more function
const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    const postContainer = event.target.closest('.read-more-container');
    const currentText = postContainer.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textContent = currentText.classList.contains('read-more-text--show') ? 'Read Less...' : 'Read More...';
  });
});



