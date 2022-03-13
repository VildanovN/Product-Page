const buyButton = document.querySelector('.description__button');

function buyHandler() {
  const busket = document.querySelector('.dropdown_shoping-busket');

  const item = document.createElement('div');

  const icon = document.createElement('img');

  const itemName = document.createElement('h3');

  const itemCost = document.createElement('p');

  const wrapper = document.createElement('div');

  icon.src = 'Images/Image_1.jpg';

  icon.classList.add('gallery__minor-image');

  item.classList.add('dropdown__item_shoping-busket');

  itemName.textContent = document.querySelector('.description__text h1').textContent;

  itemCost.textContent = document.querySelector('.description__cost p').textContent;

  wrapper.classList.add('dropdown__item_shoping-wrapper');

  wrapper.append(itemName);

  wrapper.append(itemCost);

  item.append(icon);

  item.append(wrapper);

  busket.append(item);
}

buyButton.addEventListener('click', buyHandler);
