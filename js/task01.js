'use strict';
document.addEventListener("DOMContentLoaded", function () {
    let elsMenu = document.getElementsByClassName('menu');
    [].forEach.call(elsMenu, function (elMenu) {
        let elMenuText = elMenu.querySelector('.menu-text'),
            elMenuItems = elMenu.querySelector('.menu-items');
        elMenuText.addEventListener('click', function (event) {
            console.log('.menu-text/click', arguments);
            event.stopPropagation();
            if (elMenuItems.classList.contains('hidden')) {
                elMenuItems.classList.remove('hidden')
            } else {
                elMenuItems.classList.add('hidden');
            }
        });

        let elsMenuItem = elMenu.getElementsByClassName('menu-item');
        [].forEach.call(elsMenuItem, function (elMenuItem) {
            elMenuItem.addEventListener('click', function (event) {
                console.log('.menu-item/click', arguments);
                alert('Нажали на пункт меню [' + event.target.innerText + ']')
                event.stopImmediatePropagation();
            });
        });
    });
});