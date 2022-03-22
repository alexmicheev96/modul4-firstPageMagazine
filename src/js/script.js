document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu__items'),   // класс со всеми элементами обычно это UL
    menuItem = document.querySelectorAll('.nav-menu__item'),    // это списки li
    hamburger = document.querySelector('.hamburger');    // класс гамбургера

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu__items_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu__items_active');
        });
    });
    const bcgHeart = document.querySelectorAll('.heart');
    const linkHeart = document.querySelectorAll('.header__link');

    bcgHeart.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('heart__active');
        });
    });

    linkHeart.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    const logoMini = document.querySelector('.logo-mini'),
        sidebar = document.querySelector('.sidebar'),
        sidebarItem = document.querySelectorAll('.sidebar__item'),
        helpLink = document.querySelector('.sidebar__link-bottom'),
        sidebarClose = document.querySelector('.sidebar__close');
    
    logoMini.addEventListener('click' , (e) => {
        e.preventDefault();
        sidebar.classList.toggle('sidebar_active');
    });

    helpLink.addEventListener('click' , (e) => {
        e.preventDefault();
        sidebar.classList.toggle('sidebar_active');
    });

    sidebarClose.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar_active');
    });

    sidebarItem.forEach(item => {
        item.addEventListener('click' , (e) => {
            e.preventDefault();
            sidebar.classList.toggle('sidebar_active');
        });

    });
 });