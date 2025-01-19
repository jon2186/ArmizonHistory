document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav__menu-link');
    const menuItems = document.querySelectorAll('.nav__menu-item');
    const menuIcon = document.querySelector('.nav__menu-icon');
    const logo = document.getElementById('logo'); // Получаем логотип
    const searchContainer = document.getElementById('search-container'); // Получаем контейнер формы поиска
    const menuList = document.querySelector('.nav__menu-list'); // Получаем элемент ul с классом nav__menu-list
    const nav = document.querySelector('.nav'); // Получаем элемент nav с классом nav
    const topBar = document.querySelector('.top-bar');

    const isSmallScreen = window.matchMedia('(max-width: 1023px)');
    const isMediumScreen = window.matchMedia('(max-width: 1200px)');

    function updateMenuVisibility() {
        menuList?.classList.toggle('visually-hidden', isSmallScreen.matches);

        menuItems.forEach((item, index) => {
            item.classList.toggle('hidden', isMediumScreen.matches && index >= 4);
        });
    }

    // Общая функция для отслеживания размера экрана
    function handleResize() {
        // Обновляем видимость меню при изменении размера экрана
        updateMenuVisibility();
    }

    // Обновляем видимость меню при загрузке страницы
    handleResize();

    // Добавляем обработчик события изменения размера окна
    window.addEventListener('resize', handleResize);

    isSmallScreen.addEventListener('change', updateMenuVisibility);
    isMediumScreen.addEventListener('change', updateMenuVisibility);

    // Проверка, является ли текущая страница главной
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        links.forEach(link => {
            if (link.textContent.trim() === 'Главная') {
                link.classList.add('nav__menu-link--active');
                link.setAttribute('aria-current', 'page'); // Добавляем поддержку доступности
                link.focus();
            }
        });
    }

    // Обработчики событий фокуса и кликов на ссылках меню
    links.forEach(link => {
        link.addEventListener('focus', function () {
            links.forEach(l => l.classList.remove('nav__menu-link--active'));
            this.classList.add('nav__menu-link--active');
        });

        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('nav__menu-link--active'));
            this.classList.add('nav__menu-link--active');
        });
    });

    // Флаг для отслеживания состояния кнопки гамбургера
    let isMenuActive = false;

    // Функция для переключения меню
    window.toggleMenu = function () {

        if (isMenuActive) {
            // Если меню активно, скрываем логотип, форму поиска и показываем первые 4 элемента
            if (window.innerWidth > 480) {
                if (logo) logo.style.display = 'block';
                console.log('1111');
            }
            if (searchContainer) searchContainer.classList.remove('hidden');
            if (window.innerWidth < 1024) {
                if (nav) nav.style.alignItems = 'center';
                if (menuIcon) menuIcon.style.marginTop = '';
                if (topBar) topBar.style.marginTop = '0';
            }

            // Скрываем все элементы меню опять, кроме первых 4
            updateMenuVisibility();
        } else {
            // Если меню не активно, скрываем логотип и форму поиска
            if (logo) logo.style.display = 'none';
            if (searchContainer) searchContainer.classList.add('hidden');

            // Показываем все элементы меню, после этого обновляем видимость
            menuItems.forEach(item => {
                item.classList.remove('hidden'); // Показываем все элементы
            });
            if (menuList) {
                menuList.classList.remove('visually-hidden');
                menuList.style.display = 'flex';
            }
            if (window.innerWidth < 1024) {
                if (nav) nav.style.alignItems = 'flex-start';
                if (menuIcon) menuIcon.style.marginTop = '18px';
                if (topBar) topBar.style.marginTop = '400px';
            }
            if (window.innerWidth < 480) {
                if (topBar) topBar.style.marginTop = '0';
            }
        }

        // Переключаем состояние активности меню
        isMenuActive = !isMenuActive;

        // Переключение активного состояния для кнопки гамбургера
        if (menuIcon) {
            menuIcon.classList.toggle('nav__menu-icon--active');
        }
    };

    // Обработчик клика на кнопке гамбургера
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
});
