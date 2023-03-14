"use strict";

window.addEventListener('DOMContentLoaded', init);

let hiddenSymbols = ["±", "AC"];

// 1. Display clicked button
function init () {
    const calc = document.querySelector('.calc-wrapper');
    const input = document.querySelector('input');
    let value = 0;

    console.log(input);

    calc.addEventListener('click', elem => {
        if ( elem.target.classList.contains('calc-btn') ) {
            // console.log(elem.target.innerText);
            (! hiddenSymbols.includes(elem.target.innerText) ) ? input.value += elem.target.innerText : '';
            console.log(input.value);
        }

        // 2. Operation processing
        // 2.1. Change sign
        if (elem.target.classList.contains('operations-btn')) {
            value = input.value.slice(0, -1);
            console.log('value: ', value);
            switch (elem.target.innerText) {
            case "±": console.log('op'); break;
            default: break;
            }
        }
        // 2.2. AC btn
        if (elem.target.innerText === "AC") {
            input.value = '';
        }

    });
}

