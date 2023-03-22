//
// QUESTIONS ==>
// <== QUESTIONS
//

// const data = ""; // number, undefined, null, string, boolean

// typeof
// console.log(typeof data);

// const a;

// console.log(a);

// const userName = 100;
// const adminName = 10;

// const res = userName === adminName;
// console.log(res);

// console.log(102 + "30"); // "Hello" + "world" = "Helloworld"

// const name = "Oleh";

// console.log(name.indexOf("h"));

// "any", 100, -100, true

// console.log(Boolean(""));

// const age = 22;
// const name = "Oleh";

// // const info = "I'm " + age + ". And my name is " + name + ".";
// const info = `I'm ${age}. And my name is ${name}.`;
// console.log(info);

// console.log(parseInt("22.22 px"));

// Модуль 1. Заняття 1. Змінні, типи та оператори

// # ->
// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду.
// Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// # ->
// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// students += 50;
// students *= 50;
// students /= 50;
// students -= 50;
// console.log(students);

// # ->
// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + (223 - 2) * 5;
// console.log(result);

// # ->
// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round().
// Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = Math.round(27.1);

// console.log(value);

// # ->
// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock,
// де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// # ->
// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height,
// але не як числа, а в вигляді рядків (спеціально для завдання).
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// const parcedWeight = parseFloat(weight.replace(",", "."));
// const parcedHeight = parseFloat(height.replace(",", "."));

// const bmi = Math.round((parcedWeight / parcedHeight ** 2) * 10) / 10;
// console.log(bmi); // 28.8

// # ->
// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= "7");

// console.log("12" > "13");
// "2" => 50 > "1" => 49 -> 50 > 49

// console.log("2" < "12");

// console.log("Oleh" > "Ivan");

// console.log("4" == 4);

// console.log("6" === 6);

// console.log('false' === false);

// console.log(1 === true);

// console.log("0" == false);

// console.log("0" === false);

// console.log("Papaya" === "papaya");

// console.log(undefined == null);

// console.log(undefined === null);

// const x = 10;
// const y = 10;

// console.log(x >= y); // false
// console.log(x < y); // 10 < 16 -> true
// // null >= 0; true
// // null < 0; false

// # ->
// Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(10 > 20 || 6 < 10);

// && -> повертає те що не справдилось або останнє те що справдилось
// || -> повертає те що справдилось або останнє те що не справдилось

// const res = 0 || "" || null;
// console.log(res);

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// const name = "Oleh";
// const nickName = "ZAETS";

// const uiName = nickName || name || "Default";

// console.log(uiName);

// # ->
// Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue,
// якщо воно не рівне undefined або null.
// В іншому випадку має присвоюватися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue:
//      null, undefined, 0, false.
// Використовуй оператор ?? (nullish coalescing operator).

// const age = undefined; // 0, "", false
// const defaultAge = 10;
// const value = age ?? defaultAge;
// console.log(value);
