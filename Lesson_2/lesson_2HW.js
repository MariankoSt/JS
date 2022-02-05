//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число(в першу, другу, третю или четверту частину години).
/*
let time = 34;
if (time >= 0 && time <= 15) {
    console.log('The clock hand is in the first quarter')
} else if (time >= 16 && time <= 30) {
    console.log('The clock hand is in the second quarter')
} else if (time >= 31 && time <= 45) {
    console.log('The clock hand is in the third quarter')
} else if (time >= 46 && time <=59) {
    console.log('The clock hand is in the fourth quarter')
} else {
    console.log('Your clock is broken')
}

*/

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

/*
const day = 31;
if (day >= 1 && day <= 10) {
    console.log(`Selected day ${day} is in the first decade of the month.`);
} else if (day >= 11 && day <= 20) {
    console.log(`Selected day ${day} is in the second decade of the month.`);
} else if (day >= 21 && day <= 31) {
    console.log(`Selected day ${day} is in the third decade of the month.`);
} else {
    console.log(`You have entered an invalid day of the month. Your input is ${day}. Please select a number from 1 to 31.`);
}

*/

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
/*
let test = false;
if (test !== true ) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

let test1 = 10<9 ? 'Correct': 'Incorrect';
console.log(test1); // "Beer"
*/

// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
/*
let a = null;
if (a !== 0) {
    console.log('Correct');
} else {
    console.log('Inccorect');
}

*/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
/*

let day = 0;
switch(day) {
    case day = 0 :
        console.log('Go to the Gym');
        console.log('Practice English');
        break;
    case day = 1 :
        console.log('Do homework');
        break;
    case day = 2 :
        console.log('Practice English');
        break;
    case day = 3 :
        console.log('Go for a walk');
        break;
    case day = 4 :
        console.log('Chilling with friends');
        break;
    case day = 5 :
        console.log('Have a fun');
        break;
    case day = 6 :
        console.log('Relax');
        break;
    default :
        console.log('Where did you find the eighth\'s day in a week?')
}
*/

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
/*
let year = 2022;
if (year % 4 == 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is just a regular year`);
}
*/

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
/*
let userInput = window.prompt("What's an official name of JS?");
if (userInput == 'ECMAScript') {
    window.alert('Correct!');
} else {
    window.alert('Don\'t know? ECMAScript!');
}
*/
