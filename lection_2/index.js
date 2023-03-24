//
// QUESTIONS ==>
// <== QUESTIONS
//

// if (false) {
//   console.log("IT'S TRUE");
// }

// if (0) {
//   console.log("WDpwidjwoud");
// } else {
//   console.log("HELLO ");
// }

// console.log(0 ? "WDpwidjwoud" : "HELLO");

// const condition = "HELLO" || "WORLD";

// console.log(condition ? "H" : "W");

// const role = "admin";

// switch (role) {
//   case "admin":
//     console.log("IS admin");
//     break;
//   case "user":
//     console.log("IS user");
//     break;
//   default:
//     console.log("Role is absent");
//     break;
// }

// if (role === "admin") {
//   console.log("IS admin");
// }
// if (role === "user") {
//   console.log("IS user");
// }
// if (!role) {
//   console.log("Role is absent");
// }

// && - [operand] i [operand] => true; false; false;
// || - [operand] або [operand] => true; true; false

// const isGood = true && "Awidhwhdw" && 1232; // 1232
// const isGood2 = Boolean("Ivan") === false && Boolean("Petro") === true; // false
// const isGood3 = false || false || false || 0; // 0
// const isGood4 = Boolean("Ivan") === false || Boolean("Petro") === false; // false

// const and = "Hello" && "wdwdwd" && 10 && true && 1;
// const or = "" || "awdwhd" || 0 || "NEIODN" || undefined;

// console.log(and, or);

// for (let i = 0; i < 0; i += 1) {
//   console.log("HELLO");
//   console.log(i);
// }

// Модуль 1. Заняття 2. Розгалуження. Цикли

// # ->
// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
// "Яка офіційна назва JavaScript?".
// Якщо користувач вводить "ECMAScript", то показуй alert з рядком "Правильно!",
// в іншому випадку - "Не знаєте? ECMAScript!"

// alert("Do you 18");
// const name = prompt("Enter your name");
// const answer = confirm("Do you have 18?");

// const response = prompt("Яка офіційна назва JavaScript?");

// if (response === "ECMAScript") {
//   console.log("Правильно!");
// } else {
//   console.log("Не знаєте? ECMAScript!");
// }

// alert(response === "ECMAScript" ? "Правильно!" : "Не знаєте? ECMAScript!");

// # ->
// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у форматі "".14 г. 26 хв.
// Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 10;

// let info = `${hours} hr.`;

// if (minutes) {
//   info += ` ${minutes} m.`;
// }

// console.log(info);

// # ->
// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число",
// якщо у prompt користувач ввів число більше нуля.
// Якщо було введено нуль, виводь в консоль рядок "Це нуль".
// Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = Number(prompt("Введіть число"));

// if (userInput > 0) {
//   console.log("Це позитивне число");
// } else if (userInput === 0) {
//   console.log("Це нуль");
// } else if (userInput < 0) {
//   console.log("Це негативне число");
// } else {
//   console.log("Це не число");
// }

// # ->
// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b.
// Якщо обидва значення більше 100, то виведи в консоль максимальне з них.
// В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 120;
// const b = 80;

// if (a > 100 && b > 100) {
//   const max = a > b ? a : b;
//   console.log(max);
//   //   const max = Math.max(a, b);
//   //   console.log(max);
// } else {
//   console.log(b + 512);
// }

// # ->
// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт, який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ "/".
// Використовуй конструкцію if...else.

// let link = "https://my-site.com/about";

// // if (link[link.length - 1] !== "/") {
// //   link += "/";
// // }

// if (!link.endsWith("/")) {
//   link += "/";
// }

// console.log(link);

// # ->
// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт, який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ,
// але тільки в тому випадку, якщо в link є підрядок "my-site".
// Використовуй конструкцію if...else.

// let link = "https://my-site.com/about";

// if (!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }
// console.log(link);

// # ->
// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 6, використовуючи тернарний оператор.

// let link = "https://my-site.com/about";

// link += !link.endsWith("/") && link.includes("my-site") ? "/" : "";

// console.log(link);

// # ->
// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
// Якщо значення змінної hours:
// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 28;

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours > 24) {
//   console.log("Overdue");
// } else {
//   console.log("Expires");
// }

// # ->
// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту.
// Використовуй конструкцію if...else.
// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 1;

// if (!daysUntilDeadline) console.log("Сьогодні");
// else if (daysUntilDeadline === 1) console.log("Завтра");
// else if (daysUntilDeadline === 2) console.log("Післязавтра");
// else console.log("Дата у майбутньому");

// # ->
// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.
// const daysUntilDeadline = 1;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;
//   default:
//     console.log("Дата у майбутньому");
//     break;
// }

// # ->
// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max,
// але тільки якщо число кратне 5.
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// # ->
// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt
// та логуватиме результат у консоль браузера.
// Якщо відвідувач вводить "Адмін", то prompt запитує пароль;
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано";
// В іншому випадку вивести рядок "Я вас не знаю";

// Пароль перевіряти так:
// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const login = prompt("Enter your login:");

// if (login === "Admin") {
//   alert("Admin!");
//   const password = prompt("Enter your password:");
//   const answer = `I ${password === "I'm admin" ? "" : "don't "}know you!`;
//   console.log(answer);
// } else {
//   alert(login ? "I don't know you!" : "Calceled!");
// }

// const password = "I'm admin"; // "I'm admin" => true

// const result = "I " + (password === "I'm admin" ? "" : "don't ") + "know you";
// // console.log(result);
// const result2 = `I ${password === "I'm admin" ? "" : "don't "}know you!`;

// console.log(result2);
