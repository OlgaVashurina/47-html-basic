// смотрим на глобальный объект document через консоль
// console.log(document.body);

// хочется научиться находить элементы среди многих на странице

// объявляем переменную и кладем в нее ссылку на элемент, чтобы было удобно работать с ним дальше
// ! важный этап работы с кодом в js - объявление переменных и присвоение к ним найденных элементов для взаимодействия
let heading = document.getElementsByTagName("h1")[0];
// ищем элемент по id и кладем в переменную
let desc = document.getElementById("desc__first");

// выводим в консоль строку и сам элемент
// console.log("пишу описание чтобы увидеть точно где нужный вывод в консоль: desc ==>", desc);

// изменяю заголовок через js
heading.innerText = "DOM: Document Object Model";

let btnChange = document.querySelector("#btn-change");
let btnHide = document.getElementById("btn-hide");
let list = document.querySelector(".method-list");
let btnCreate = document.querySelector('#btn-create')


// функция слушатель событий которую мы 'вешаем' на кнопку
// она ждет в себя первым параметром тип события в виде строки, например 'click'
// вторым параметром стрелочную функцию с действиями который вы хотите произвести

btnChange.addEventListener("click", () => {
    heading.style.color = "red";
});

btnHide.addEventListener("click", () => {
    // если свойство display 'none' меняем его на 'block'
    if (list.style.display === "none") {
        // меняем текст кнопки, когда показываем элемент
        btnHide.innerText = "hide list";
        list.style.display = "block";
        console.log(list.style.display);
    } else {
        // меняем текст кнопки, после того как спрятали элемент
        btnHide.innerText = "show list";
        list.style.display = "none";
    }
});

btnCreate.addEventListener('click', () => {
    // создаем новый элемент и кладем его в переменную перед добавлением на страницу
    let newElement = document.createElement('p')
    // добавляем текст
    newElement.innerText = 'Кажется, я начинаю понимать этот DOM 🏡'
    // красим элемент
    newElement.style.color = 'rgb(0, 0, 139)'
    // ! важно не забыть добавить элемент на страницу
    // добавляем новый элемент в конец body
    document.body.appendChild(newElement)
    console.log(newElement);
})