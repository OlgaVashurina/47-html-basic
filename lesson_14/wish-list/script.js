const form = document.querySelector('#wish-form')
const list = document.querySelector('#wish-list')

// массив для желаний
let wishArr = []

form.addEventListener('submit', (e) => {
    //что бы страница на событие не перезагружалась, мы обращаемся к необязательному параграфу е (event) который передает в функцию браузер в нем содержиться инфо о произошедшем событии + мы можем управлять поведением формы
    
    e.preventDefault();
    console.log(e);
    console.log('submit!');
})