//

// foo();
// foo2();

// function foo() {
//   return "HELLO";
// }

// const foo2 = () => "HELLO";

// console.log(foo());
// console.log(foo2());

// function callMe(callback) {
//   if (false) {
//     callback();
//   }
// }

// callMe(function () {
//   console.log("HELLO");
// });
// callMe(function () {
//   console.log("232323HELLO");
// });
// callMe(function () {
//   console.log("HEL123123LO");
// });
// callMe(function () {
//   console.log("23123");
// });

// function validateValue(value, onSuccess, onError) {
//   if (value !== null && value !== undefined && value !== "") {
//     onSuccess("HELLO");
//   } else {
//     onError("GOOD BYE", value);
//   }
// }

// validateValue(
//   100,
//   function () {
//     console.log("Number is correct");
//   },
//   function () {
//     console.log("Number is incorrect");
//   }
// );

// validateValue(
//   null,
//   (message) => console.log(message, "Number is correct"),
//   (message, second) => console.log(message, second, "Is incorrect")
// );

// validateValue(
//   "",
//   function () {
//     console.log("String is correct");
//   },
//   function () {
//     console.log("String is incorrect");
//   }
// );

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log("______");

// for (const number of arr) {
//   console.log(number);
// }

// console.log("______");

// arr.forEach((number) => console.log(number));

// const customForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };

// const b = () => "HELLO";
// const a = (callback) => {
// };

// a(b)
// customForEach(arr, (number) => console.log(number, "HELLO"));

//
// Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach

// =>
// Example 1 - Коллбек функції
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id
// та викликає коллбек передаючи йому створений об'єкт.

// const createProduct = (obj, callback) => {
//   const newObj = {
//     ...obj,
//     id: Math.random(),
//   };

//   callback(newObj);
// };

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// const logProduct = (product) => console.log(product);
// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// =>
// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError)
// та deposit(amount, onSuccess, onError), де перший параметр це сума операції,
// а другий та третій - коллбеки.

// Метод withdraw викликає onError,
// якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError,
// якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   balance: 1000,

//   withdraw(amount, onSuccess, onError) {
//     if (amount <= 0) onError("Amount is less than zero");
//     else if (amount > TRANSACTION_LIMIT) onError("Amount is more than limit");
//     else if (amount > this.balance)
//       onError(
//         `Amount is more than balance. Because you're trying to receive $${amount} dollars and you have only $${this.balance}`
//       );
//     else {
//       this.balance -= amount;
//       onSuccess("Withdraw is Good! Balance: " + this.balance);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount <= 0) onError("Amount is less than zero");
//     else if (amount > TRANSACTION_LIMIT) onError("Amount is more than limit");
//     else {
//       this.balance += amount;
//       onSuccess("Deposit is Good! Balance: " + this.balance);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(-1000, handleSuccess, handleError);
// account.withdraw(1500, handleSuccess, handleError);
// account.withdraw(500, handleSuccess, handleError);
// account.withdraw(1000, handleSuccess, handleError);

// account.deposit(10000, handleSuccess, handleError);
// account.deposit(-10000, handleSuccess, handleError);
// account.deposit(500, handleSuccess, handleError);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(1000, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// =>
// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив,
// а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// function each(arr, callback) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     const res = callback(arr[i]);
//     result.push(res);
//   }

//   //   arr.forEach(function (number) {
//   //     const res = callback(number);
//   //     result.push(res);
//   //   });

//   //   arr.forEach((number) => result.push(callback(number)));

//   return result;
// }

// console.log(
//   each(
//     each([64, 49, 36, 25, 16], (value) => (value + 2 - 4) / 3),
//     (v) => Math.round(v)
//   )
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10; // [54, 39, 26, 15, 6]
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// =>
// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// =>
// Example 5 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// =>
// Example 6 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const logItems = (items = []) => {
//   items.forEach((item, i) => {
//     console.log(`${i + 1} - ${item}`);
//   });
// };

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// =>
// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function printContactsInfo({ names = "", phones = "" }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   nameList.forEach((item, i) => {
//     console.log(`${item}: ${phoneList[i]}`);
//   });
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// =>
// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const calculateAverage = (...args) => {
//   //   return args.reduce((total, current) => total + current, 0) / args.length;

//   let total = 0;

//   args.forEach((item) => (total += item));

//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
