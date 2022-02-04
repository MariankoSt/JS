//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число(в першу, другу, третю или четверту частину години).
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

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
/*
// Incorrect solution. Ask somebody why it doesn't work
const day = 1;

switch (day) {
    case day >= 1 && day <= 10 :
        console.log(`Selected day ${day} is in the first decade of the month`);
        break;
    case day >= 11 && day <= 20 :
        console.log(`Selected day ${day} is in the second decade of the month`);
        break;
    case day >= 21 && day <= 31 :
        console.log(`Selected day ${day} is in the third decade of the month`);
        break;
    default :
        console.log(`You have entered an invalid day of the month. Your input is ${day}. Please select a number from 1 to 31.`);
        break;
}
*/



/*

// correct solution
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