// Элементы модального окна
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Данные о друзьях
const friends = {
  "Артём": {
    text: "АЗИАТСКО-НИГЕРСКИЙ БЕЛЫЙ КАБАН. Самое главное ядро нашей компании!",
    img: "images/artem.png"
  },
  "Соня": {
    text: "Весёлая и креативная, всегда поднимает настроение!",
    img: "images/sonya.png"
  },
  "Леонид": {
    text: "Мудрый и спокойный, а так же любит мужиков",
    img: "images/leonid.png"
  },
  "Стоникс": {
    text: "Безумный, но невероятно БЛЯТЬ ОН ЕБАНУТЫЙ КРЕМИРУЙТЕ ЕГО БЫСТРЕЕ",
    img: "images/stonix.png"
  },
  "Тимофей": {
    text: "Невероятно весёлый и единственный кто не с кем не сорится!",
    img: "images/timofey.jpg"
  }
};

// Обработка клика на карточки
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    const friendName = card.querySelector('h3').innerText;
    modalTitle.innerText = friendName;
    modalText.innerText = friends[friendName]?.text || "Информация отсутствует.";
    modalImage.src = friends[friendName]?.img || "";
    modalImage.style.display = friends[friendName]?.img ? "block" : "none";
    modal.style.display = 'flex';
  });
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие при клике вне окна
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Кнопка "Нажми, если ты Фурри"
document.getElementById('furryButton').addEventListener('click', () => {
  modalTitle.innerText = "Филин";
  modalText.innerText = "Мудрый, добрый и имеет несколько личностей (особенно в днд)";
  modalImage.src = "images/furry.jpg"; // Добавь сюда фото для Popup
  modalImage.style.display = "block";
  modal.style.display = 'flex';
});
