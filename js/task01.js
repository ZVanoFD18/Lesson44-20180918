'use strict';
document.addEventListener("DOMContentLoaded", function () {
    let elsMenu = document.getElementsByClassName('menu');
    // for (let i=0; i < elsMenu.length; i++){
    //     let elMenu = elsMenu[i];
    // }
    [].forEach.call(elsMenu, function (elMenu) {
        let elMenuText = elMenu.querySelector('.menu-text'),
            elMenuItems = elMenu.querySelector('.menu-items');
        elMenuText.addEventListener('click', function (event) {
            console.log('elMenuText/click', arguments);
            event.stopPropagation();
            // let elMenuText = event.target.parentElement.querySelector('.menu-text'),
            //     elMenuItems = event.target.parentElement.querySelector('.menu-items');
            if (elMenuItems.classList.contains('hidden')) {
                elMenuItems.classList.remove('hidden')
            } else {
                elMenuItems.classList.add('hidden');
            }
        });

        let elsMenuItem = elMenu.getElementsByClassName('menu-item');
        [].forEach.call(elsMenuItem, function (elMenuItem) {
            elMenuItem.addEventListener('click', function (event) {
                console.log('menu-item/click', arguments);
                event.stopPropagation();
            });
        });
    });
});