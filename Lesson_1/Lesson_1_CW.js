//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.
/*
let height = 23;
let width = 10;
let s = height * width;
document.writeln('The area of the rectangle is ' + s + " " + "sm" );
*/

//Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
/*
let heightC = 10;
let dC = 4;
function getVolume (heightC,dC){
    return Math.PI* dC *heightC;
}
let v = getVolume(heightC,dC);
document.writeln('The volume of the cylynder is ' + v + ' ' + 'm');
*/
/*
//У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
document.write("The hypotenuse of the right triangle is " + k );
*/

//. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let myArray = [];
let random = Math.floor(Math.random(10))
