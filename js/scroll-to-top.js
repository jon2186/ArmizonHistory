// Получаем кнопку
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Показываем кнопку при прокрутке страницы вниз
window.onscroll = function () {
    if (window.innerWidth > 480) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
};

// Добавляем обработчик события клика для кнопки
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
};

// Проверяем положение страницы при загрузке страницы
window.onload = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    }
};
