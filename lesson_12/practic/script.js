const cat = {
    name: "Marsik",
    color: "bunt",
    age: 5,
    isWild: false,
    owner: ["Mascha", "Dasha", "Petrusha"]
}
console.log(cat);

const dog = {
    name: "Oliver",
    color: "wheis",
    age: 10,
    isWild: true,
    owner: ["Olga", "Alena", "Roma"]
}
console.log(dog);

const pets = [cat, dog];

const newPets = [...pets, {
    name: "Zefir",
    color: "red",
    age: 3,
    isWild: false,
    owner: ["Marina", "Semen", "Pavel"]
}]

console.log(newPets);
for (let index = 0; index < newPets.length; index++) {
    console.log(`Это ${newPets[index].name}, ${newPets[index].age} лет`);

}




//                         условие пока цикл не закончится
//                         массив петс       
for (let index = 0; index < pets.length; index++) {
    // тело цикла, будет столько раз сколько -1 длинна масива
    // итерируемся по пец (вначале кот потом пес)
    // обращаемся к 0 эл и забираем
    // console.log(pets[0].name);
    console.log(pets[index].name);
    console.log(pets[index].color);
    console.log(pets[index].age);
    console.log(pets[index].isWild);
    console.log(pets[index].owner);
    // как итератор будет перечислять, как счетчик.
};

const starWarsHeroes = [{
        name: "Anakin Skywalker",
        age: 30,
        isJedi: true
    },
    {
        name: "Luke Skywalker",
        age: 25,
        isJedi: true
    },
    {
        name: "Han Solo",
        age: 35,
        isJedi: false
    },
    {
        name: "Princess Leia",
        age: 30,
        isJedi: false
    },
    {
        name: "Obi-Wan Kenobi",
        age: 60,
        isJedi: true
    },
];

function getHeroesNamesAndJediStatus(heroes) {
    return heroes.map(hero => ({
        name: hero.name,
        isJedi: hero.isJedi
    }));
}

const heroesNamesAndJediStatus = getHeroesNamesAndJediStatus(starWarsHeroes);
console.log(heroesNamesAndJediStatus);

//Задание 1.2
//Создадим новый массив с джедаями младше 40 лет.

const getYoungJedis = (heroes) => {
    return heroes.filter(hero => hero.isJedi && hero.age < 40);
}
const youngJedis = getYoungJedis(starWarsHeroes);
console.log(youngJedis);

// Задание 1.3
// Посчитаем суммарный возраст всех джедаев.

function getTotalJediAge(heroes) {
    return heroes
        .filter(hero => hero.isJedi)
        .reduce((total, hero) => total + hero.age, 0);
}

const totalJediAge = getTotalJediAge(starWarsHeroes);
console.log(totalJediAge);

// Задание 1.4
// Повысим возраст героев на 10 лет.

const increaseHeroesAge = (heroes) => {
    return heroes.map(hero => ({
        ...hero,
        age: hero.age + 10
    }));
}

const heroesWithIncreasedAge = increaseHeroesAge(starWarsHeroes);
console.log(heroesWithIncreasedAge);

// Задание 1.5
// Создадим новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }.

function replaceAnakinWithVader(heroes) {
    return heroes.map(hero =>
        hero.name === "Anakin Skywalker" ?
        {
            name: "Darth Vader",
            isJedi: false,
            age: 50
        } :
        hero
    );
}

const updatedHeroes = replaceAnakinWithVader(starWarsHeroes);
console.log(updatedHeroes);