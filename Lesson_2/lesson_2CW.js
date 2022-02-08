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
/*
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = false;
let runnerAge = 19
if (runnerAge > 18 && earlyRegistered) {
    raceNumber += 1000
}
// determining the race time
if (runnerAge > 18 && earlyRegistered) {
    console.log(`The runner with race number ${raceNumber} please, notice that the race starts at 9:30 am`);
} else if (runnerAge > 18 && !earlyRegistered) {
    console.log(`Late adults run at 11:00 am. The runner with race number ${raceNumber} please, notice that the race starts at 11:00 am`);
} else if (runnerAge < 18) {
    console.log(`The runner with race number ${raceNumber} please, notice that the race starts at 12:30 pm`);
} else
    console.log('Go to the registration desk!')
*/

/*
// камінь, ножниці, папір

const getUserChoice = userInput => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
        return userInput;
    } else {
        return console.log('Please, select a valid value!');
    }
    userInput = userInput.toLowerCase();
};
const getComputerChoise = () => {
    computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0 :
            return 'rock';
            break;
        case 1 :
            return 'scissors'
            break;
        case 2 :
            return 'paper';
            break;
    }
}
const determineWinner = (userChoise, computerChoise) => {
    if (userChoise === computerChoise) {
        return 'The game was a tie';
    } else if (userChoise === 'rock') {
        if (computerChoise === 'scissors') {
            return 'Human has just won!';
        } else {
            return 'The machine era has just begun!';
        }
    } else if (userChoise === 'scissors') {
        if (computerChoise === 'rock') {
            return 'The machine era has just begun!';
        } else {
            return 'Human has just won!';
        }
    } else if (userChoise === 'paper') {
        if (computerChoise === 'rock') {
            return 'Human has just won!';
        } else {
            return'The machine era has just begun!';
        }
    } else if (userChoise === 'bomb') {
        return 'Ha Ha, Humans always wins!';
    } else {
        return console.log('An error has just occured!');
    }

}
const playGame = () => {
    let userChoise = getUserChoice('bomb');
    let computerChoise = getComputerChoise()
    console.log('You threw: ' + userChoise);
    console.log('The computer threw: ' + computerChoise);
    console.log(determineWinner(userChoise,computerChoise))
}
playGame();
*/

/*
// Sleep dept calculator
const getSleepHours = day => {
    if (day === 'monday') {
        return 7;
    } else if (day === 'tuesday') {
        return 6;
    } else if (day === 'wednesday') {
        return 12;
    } else if (day === 'thursday') {
        return 7;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 8;
    } else if (day === 'sunday') {
        return 9;
    } else {
        console.log('Invalid day! Please, enter the valid day!');
    }
}
const getActualSleepHours = (monday, tuesday, wednesday, thursday, friday, saturday, sunday) => {
    return (monday + tuesday + wednesday + thursday + friday + saturday + sunday);
}

const getIdealSleepHours = userInput => {
    return userInput * 7;
}
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(11,12,13,14,5,6,17);
    const idealSleepHours = getIdealSleepHours(11);
    let diffValue = idealSleepHours - actualSleepHours;
    if (actualSleepHours === idealSleepHours) {
        console.log('You are sleeping perfectly');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) bigger sleep than you needed this week.');
    } else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');;
    }
};
calculateSleepDebt()
*/

