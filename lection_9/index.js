//
//

// parseInt();
// parseFloat();

// console.log("HELLO");

// const user = {
//   balance: 1000,

//   getBalance(a, b, c) {
//     console.log(a, b, c);
//     return this.balance;
//   },
// };

// function showInfoFromCallback(callback) {
//   const res = callback.apply(user, [1, 2, 3]);
//   console.log("INFO: " + res);
// }

// showInfoFromCallback(user.getBalance.bind(user, 1, 2, 3));
// showInfoFromCallback(user.getBalance);

// const sayThis = () => {
//   console.log(this);
// };

// const user = {
//   sayThis() {
//     const childF = () => {
//       console.log(this);
//     };
//     childF();
//   },
// };

// const a = user.sayThis;

// a();

//
// Модуль 5. Заняття 9. Контекст виклику функції та this

// # ->
// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName),
// який приймає назву каменю і розраховує та повертає загальну вартість
// каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find((stone) => stone.name === stoneName);

//     if (!stone) return 0;

//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// # ->
// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );
// console.log(phonebook.contacts);

// # ->
// Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a ?? this.a;
//     this.b = b ?? this.b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 30);
// console.log(calculator.add());
// console.log(calculator.mult());

// calculator.read(20);
// console.log(calculator.add());
// console.log(calculator.mult());

// const a = 8;
// const b = 1;

// console.log(a * b);
// console.log(a / b);
// console.log(a - b);
