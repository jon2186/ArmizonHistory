document.querySelectorAll('.aside__link').forEach(link => {
    link.addEventListener('click', function (event) {
        // Убираем класс .aside__link--active у всех ссылок
        document.querySelectorAll('.aside__link').forEach(link => {
            link.classList.remove('aside__link--active');
        });

        // Добавляем класс .aside__link--active к текущей ссылке
        this.classList.add('aside__link--active');
    });
});
