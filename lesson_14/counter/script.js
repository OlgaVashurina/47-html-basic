// 1. обьявили переменную и положили в них ссылку на интерактивыне элементы

const btnPlus = document.querySelector('#counter-btn_plus');
const btnMinus = document.querySelector('#counter-btn_minus');
const counterValue = document.querySelector('#counter-value');

//2. создали переменную счетчик
let counter = 0


// 3 отдельно от слушателей событий создали функции описывающие дейставия, которые произойдет при обработке событий
const minusHandler = () => {
    counter--
    counterValue.textContent = counter
}

const plussHandler = () => {
    counter++
    counterValue.textContent = counter
}

// 4 передаем тип события и функции слушатель события
btnPlus.addEventListener('click', minusHandler)

btnMinus.addEventListener('click', plussHandler)