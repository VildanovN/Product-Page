const submitButton = document.querySelector('.comments__button');
const commentForm = document.querySelector('.comments__text-area');
const commentSection = document.querySelector('.comments__section');

submitButton.addEventListener('click', () => {
  const comment = document.createElement('div');
  const user = sessionStorage.getItem('user');

  if (!user) {
    return false;
  }

  const nickname = document.createElement('h3');
  const message = document.createElement('p');

  nickname.textContent = sessionStorage.getItem('user');

  message.textContent = commentForm.value;

  comment.classList.add('comments__comment');

  comment.append(nickname);

  comment.append(message);

  commentForm.value = '';

  commentSection.append(comment);

  return true;
});

commentForm.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    submitButton.click();
    event.preventDefault();
  }
});
