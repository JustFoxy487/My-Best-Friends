// Открытие Popup
function openPopup(name, description, photo) {
  const popup = document.getElementById("popup");
  document.getElementById("popupName").innerText = name;
  document.getElementById("popupDescription").innerText = description;
  document.getElementById("popupPhoto").src = photo;
  popup.classList.add("show");
}

// Закрытие Popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
}

// Закрытие при клике вне окна
document.getElementById("popup").addEventListener("click", (event) => {
  const popupContent = document.querySelector(".popup-content");
  if (!popupContent.contains(event.target)) {
    closePopup();
  }
});

// Обработчик для кнопки "Нажми если ты фурри"
document.getElementById("furryButton").addEventListener("click", () => {
  openPopup(
    "Филин",
    "Филин — мой особенный друг. Он всегда поддерживает и вдохновляет меня!",
    "furry-photo.jpg" // Укажите путь к картинке вашего друга Филина
  );
});

// Функция переключения темы
function toggleTheme() {
  const body = document.body;
  const themeSwitcher = document.querySelector('.theme-switcher');
  
  // Переключаем класс body между light и dark
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    themeSwitcher.textContent = '🌞';
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    themeSwitcher.textContent = '🌙';
  }
}

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Функция для смены темы
themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('theme-light')) {
    body.classList.replace('theme-light', 'theme-dark'); // Меняем классы
    themeToggleButton.textContent = 'Светлая тема';
  } else {
    body.classList.replace('theme-dark', 'theme-light'); // Меняем классы
    themeToggleButton.textContent = 'Тёмная тема';
  }
});

