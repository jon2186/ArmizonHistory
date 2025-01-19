// Функция для показа баннера
function showCookieBanner() {
    document.querySelector('.cookie-banner').classList.add('cookie-banner--visible');
}

// Функция для скрытия баннера
function hideCookieBanner() {
    document.querySelector('.cookie-banner').classList.remove('cookie-banner--visible');
    localStorage.setItem('cookiesAccepted', 'true'); // Устанавливаем значение в localStorage
}

// Проверяем, принял ли пользователь куки
if (!localStorage.getItem('cookiesAccepted')) {
    showCookieBanner(); // Если нет, показываем баннер
}

// Добавляем обработчик клика на кнопку "Принять"
document.getElementById('accept-cookies').onclick = function () {
    hideCookieBanner(); // Скрываем баннер при нажатии кнопки "Принять"
};
