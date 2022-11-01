function showMenu() {
  document.querySelector('.dropdown__content').classList.toggle('dropdown__content_show');
}

document.querySelector('.dropdown__button').addEventListener('click', showMenu);

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown__button')) {
    const dropdowns = document.querySelectorAll('.dropdown__content');
    for (let i = 0; i < dropdowns.length; i += 1) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown__content_show')) {
        openDropdown.classList.remove('dropdown__content_show');
      }
    }
  }
});
