'use strict';
document.addEventListener("DOMContentLoaded", function () {
    console.log('document loaded');
    let fieldEl = document.getElementById('field'),
        ballEl = document.getElementById('ball');
    document.onclick = function (event) {
        let cssField = getComputedStyle(fieldEl);
        let fieldSize = fieldEl.getBoundingClientRect(fieldEl),
            oldLeft = ballEl.offsetLeft,
            oldTop = ballEl.offsetTop;
        let ballLeft = event.clientX - (ballEl.offsetWidth / 2),
            ballRight = ballLeft + ballEl.offsetWidth,
            ballTop = event.clientY - (ballEl.offsetHeight / 2),
            ballBottom = ballTop + ballEl.offsetHeight
        ;
        ballEl.style.left = ballLeft + 'px';
        ballEl.style.top = ballTop + 'px';

        if (isBetween(ballLeft, fieldSize.left, fieldSize.right)
            && isBetween(ballRight, fieldSize.left, fieldSize.right)
            && isBetween(ballTop, fieldSize.top, fieldSize.bottom)
            && isBetween(ballBottom, fieldSize.top, fieldSize.bottom)
        ) {
            // skip - попали в поле
        } else {
            // setTimeout(function () {
            //     alert('Аут');
            // }, 100);
            document.getElementById('warning').classList.remove('hidden'); // Вместо alert показываем блок warning
            ballEl.classList.add('aut');
            setTimeout(function () {
                ballEl.classList.remove('aut');
                document.getElementById('warning').classList.add('hidden');
                ballEl.style.left = oldLeft + 'px';
                ballEl.style.top = oldTop + 'px';
            }, 3000); // Таймаут следует согласовывать с CSS #ball transition-duration
        }
    };

    function isBetween(val, valMin, valMax) {
        if (val >= valMin && val <= valMax) {
            return true;
        }
        return false;
    }
});