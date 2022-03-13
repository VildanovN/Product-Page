function showMenu() {
  document.querySelector('.dropdown__content.dropdown_shoping-busket').classList.toggle('dropdown__content_show');
}

document.querySelector('.shoping-basket').addEventListener('click', showMenu);
