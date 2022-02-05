// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
/*
let a = 10;
let b = 1;
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else {
    console.log('The numbers are the same');
}
*/
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
/*
let number = 10;
if (number === 10) {
    console.log('Correct!');
} else {
    console.log('Inccorect!');
}
*/

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
/*
let apartment = prompt('What apartment number do you looking for?');
if (apartment >= 1 && apartment <= 20) {
    console.log(`The apartment #${apartment} is located in the first entrance.`);
} else if (apartment >= 21 && apartment <= 48) {
    console.log(`The apartment #${apartment} is located in the second entrance.`);
} else if (apartment >= 49 && apartment <= 90) {
    console.log(`The apartment #${apartment} is located in the third entrance.`);
} else if (apartment == null) {
    console.log(`Action canceled`);
} else {
    console.log(`The apartment #${apartment} does not exist!`);
}
*/
//- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
/*
let x = 'Rona';
if (typeof x === "number") {
    console.log(1);
} else if (typeof x === "string") {
    console.log(2);
} else if (typeof x === "boolean") {
    console.log(3);
} else if (typeof x === "object" || "array") {
    console.log(4);
} else {
    console.log('Another data type');
}
*/

//- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
/*
let prize = 5
switch(prize) {
    case 1 :
        window.alert('You won a car!');
        break;
    case 2 :
        window.alert('You won a Moto!');
        break;
    case 3 :
        window.alert('You won a Phone!');
        break;
    case 4 :
        window.alert('You won a Pen!');
        break;
    case 5 :
        window.alert('You won a Pencil!');
        break;
    default :
        window.alert('You have entered invalid data! Please, enter a valid number between 1 and 5 inclusively.');
        break;
}
*/

//- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
/*
let temperature = null;
if (temperature >= 10 && temperature <= 22) {
    console.log('Let\'s race!');
} else {
    console.log('Be careful! No racing today=(');
}
*/