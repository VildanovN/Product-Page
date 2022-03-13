function showCover() {
  const coverDiv = document.createElement('div');
  coverDiv.classList.add('cover-div');

  document.body.style.overflowY = 'hidden';
  document.body.append(coverDiv);
}

function hideCover() {
  document.querySelector('.cover-div').remove();
  document.body.style.overflowY = '';
}

function autorizationHandler() {
  showCover();
  const container = document.querySelector('.autorization-window');
  const formList = [];
  formList.push(container.querySelector('.autorization-window__textarea'));
  formList.push(container.querySelectorAll('.button_autorization')[0]);
  formList.push(container.querySelectorAll('.button_autorization')[1]);
  let focusMark = -1;

  function escapeHandler(event) {
    if (event.key === 'Escape') {
      formList[2].click();
    }
  }

  function enterHandler(event) {
    if (event.key === 'Enter') {
      formList[1].click();
    }
  }

  function tapHandler(event) {
    if (event.key === 'Tab' && !event.shiftKey) {
      if (focusMark === (formList.length - 1)) {
        focusMark = -1;
      }

      focusMark += 1;

      formList[focusMark].focus();
      event.preventDefault();
    }
  }

  function tapShiftHandler(event) {
    if (event.key === 'Tab' && event.shiftKey) {
      if (focusMark <= 0) {
        focusMark = formList.length;
      }

      focusMark -= 1;

      formList[focusMark].focus();
      event.preventDefault();
    }
  }

  function deautorizationHandler() {
    sessionStorage.setItem('user', '');
    document.querySelector('.autorization').textContent = 'Войти';
    document.querySelector('.autorization').removeEventListener('click', deautorizationHandler);
    document.querySelector('.autorization').addEventListener('click', autorizationHandler);
  }

  function removeHandlers() {
    window.removeEventListener('keydown', escapeHandler);
    window.removeEventListener('keydown', enterHandler);
    window.removeEventListener('keydown', tapHandler);
    window.removeEventListener('keydown', tapShiftHandler);
  }

  function complete() {
    hideCover();
    container.style.display = 'none';
    removeHandlers();
  }

  formList[1].onclick = (event) => {
    const user = formList[0].value;

    if (!user) {
      return false;
    }

    sessionStorage.setItem('user', user);
    formList[0].value = '';
    complete();
    document.querySelector('.autorization').textContent = 'Выйти';
    document.querySelector('.autorization').removeEventListener('click', autorizationHandler);
    document.querySelector('.autorization').addEventListener('click', deautorizationHandler);
    event.preventDefault();

    return true;
  };

  formList[2].onclick = () => {
    complete();
  };

  window.addEventListener('keydown', escapeHandler);

  window.addEventListener('keydown', enterHandler);

  window.addEventListener('keydown', tapHandler);

  window.addEventListener('keydown', tapShiftHandler);

  container.style.display = 'flex';
  formList[0].focus();
}

document.querySelector('.autorization').addEventListener('click', autorizationHandler);
