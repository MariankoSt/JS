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
