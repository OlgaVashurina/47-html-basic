// ! arrays - массивы
// сложный тип данных
// синтаксис массива включает фигурные скобки

const arr = [];

const numbers = [1, 23, 8, 9, 1888, -9, 1];
const fruits = ["apple", "orange", "kiwi", "banana"];

// мы можем создавать массивы из разных типов данных, но как правило - это не нужно и не удобно 😳
const arr1 = [1, "apple", undefined, true];

// чтобы обратиться к элементу массива мы используем его индекс

let kiwi = fruits[2];

// если мы обращаемся к индексу несуществующего элемента - мы получим undefined
let secret = fruits[10];

//! loop - циклы для работы с массивами

// * for loop

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i], "под номером", i);
// }

// console.log("длинна fruits", fruits.length);

// * while loop
// операции в теле цикла будут выполнятся пока выражение в круглых скобках будет равно true
// важно не попасть в бесконечный цикл и задать правильное условия для выхода из цикла

let i = 0;

// while (i < 10) {
//   console.log(i, "раз");
//   i++;
// }

// * if / else
// логическое условие

let isStudent = true;

// если условие в скобках верное отработает первый блок кода
// if (isStudent) {
//   console.log("похоже, что вы студент!");
//   // если условие ложное отработает блок кода после else
// } else {
//   console.log("кажется, что вы еще не 👩🏼‍🎓");
// }

// ! методы добавления и удаления элементов в массив
// все методы массивов делятся на мутирующие и не мутирующие
// мутирующие - изменяют исходный массив
// не мутирующие - не изменяют

const animals = ["shark", "panda", "tiger", "otter"];

const snake = "snake";

// * метод добавления элемента в конец массива push()
// мутирующий метод
// изменяет исходный массив, добавляя в конец новый элемент
// возвращенное значение - новая длина массива, к которому применили push
// animals.push(snake)

const newLengthOfAnimals = animals.push(snake);

// измененный исходный массив
// console.log(animals);
// можно использовать возвращенное значение (если нужно)
// console.log(newLengthOfAnimals);

// * метод удаления элемента из конца массива pop()
// мутирующий метод
// изменяет исходный массив, удаляя последний элемент
// возвращенное значение - удаленный элемент

const deletedElement = animals.pop();

// console.log(animals);
// console.log(deletedElement);

// * unshift - метод добавления элемента в начало массива
// мутирующий метод
// изменяет исходный массив, добавляя в начало новый элемент
// возвращенное значение - новая длина массива, к которому применили unshift

const newLengthOfAnimals1 = animals.unshift("turtle");

// console.log(newLengthOfAnimals1);
// console.log(animals);

// * shift - метод удаления из начала массива
// мутирующий метод
// изменяет исходный массив, удаляя первый элемент
// возвращенное значение - удаленный элемент

const deletedElement1 = animals.shift();

// console.log(animals);
// console.log(deletedElement1);

// * spread syntax - спред оператор

// удобный способ сделать копию массива
// чтобы сделать копию нужно обратиться в фигурных скобках к исходному массиву через '...'
// подходит для одномерных неглубоких массивов

const newAnimals = [...animals];
newAnimals.push("🐢");

const moreAnimals = ["bear", "fox", ...animals, "duck"];

// console.log(animals);
// console.log(newAnimals);

// два одинаковых на вид массива всегда будут не равны
// потому что это ссылочный тип данных

// console.log(animals === newAnimals);
// console.log([...animals, ...moreAnimals]);

// ! objects

// объект ссылочный тип данных
// данный хранятся в формате: ключ и значение
// ключи объекта - это строковые значения

// примеры создания объектов
const person1 = {
    name: "John",
    lastname: "Johnson",
    age: 40,
    isAdult: true,
    isMarried: false,
    siblings: ["Emma", "Ron", "Ethan"]
};

const person2 = {
    name: "Emma",
    lastname: "Johnson",
    age: 43,
    isAdult: true,
    isMarried: true,
    siblings: ["Ron", "Ethan", "John"]
};

// массив из объектов с одинаковыми ключами
// отлично подходит для описания сложных данных и операций с ними
const family = [person1, person2];

// пример обращения к значениям внутри объекта по ключам через точку
// и пример конкатенации - сложения строк
const message =
    person2.name + " " + person2.lastname + " is sister of " + person1.name + " " + person1.lastname;

console.log(message);

// * деструктуризация объектов

// в одно действие мы:

// 1. забираем данные из объекта по ключам
// 2. объявляем переменные с названиями совпадающими с именами этих ключей,
// 3. присваиваем значения в эти новые переменные переменные

// по сути мы разрываем объект на кусочки и эти кусочки кладем сразу вы отдельные переменные

// ? так выглядит запись без деструктуризации 😥

// const name = person2.name;
// const lastname = person2.lastname;
// const age = person2.age;
// const isAdult = person2.isAdult;
// const isMarried = person2.isMarried;
// const siblings = person2.siblings;

// * а это деструктуризация: 😀
const {
    name,
    lastname,
    age,
    isAdult,
    isMarried,
    siblings
} = person2;

// частный случай: забираем не все ключи и переименовываем переменные,
// чтобы не было ошибки при повторной инициализации
const {
    name: name1,
    lastname: lastname1,
    age: age1
} = person1;

console.log(name, lastname, age, isAdult, isMarried, siblings);
console.log(name1, lastname1, age1);

// * шаблонные строки - синтаксис для отображения данных
// способ объединения строк - аналог конкатенации

// в косых кавычках (backticks) пишем знак доллара и фигурные скобки
// 'открываем портал в логику' 🪄

const johnsAge = `${person1.age} is age of ${person1.name} ${person2.lastname}`;

// в таком синтаксисе мы можем не только обращаться к переменным и выводить их значения
// мы можем совершать операции над данными

console.log(`${person1.age + person2.age} is common age of siblings`);

const backticks = `this is backticks example: ${johnsAge}`;

console.log(backticks);

// console.log(family);

for (i = 0; i < family.length; i++) {
    console.log(`${i + 1} This is ${family[i].name} ${family[i].lastname}`);
}