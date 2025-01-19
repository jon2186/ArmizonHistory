// получаем элемент с классом login
const loginBlock = document.querySelector('.login');

// добавляем обработчик клика на элемент
loginBlock.addEventListener('click', () => {
    // открываем новое окно при клике
    window.open('https://example.com', '_self');
});
