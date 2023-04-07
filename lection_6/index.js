//
// QUESTIONS ==>

// rest/... - збирання багато значень в одне занення
// spread/... - розбирає з одного значення в багато змінних

// const userFromDataBase = {
//   name: "Oleh",
//   age: 22,
//   position: "teacher",
// };

// const car = {};

// const { aaa: bbb } = { aaa: "BBB" };

// console.log(bbb);

// const {
//   car: newCar,
//   name,
//   age = 24,
// } = {
//   name: "Ivan",
//   car: {
//     model: "BMW",
//   },
// };

// console.log(age);
// const { age, name, position } = userFromDataBase;

// const adminUser = {
//   isAdmin: true,
//   ...userFromDataBase,
// };

// function showUserInfo({ age, name, position, surname }) {
//   console.log(
//     `My name is ${name}. My surname is ${surname}. I'm ${age}. I'm ${position}.`
//   );
// }

// showUserInfo({
//   age: 22,
//   name: "Oleh",
//   surname: "Zankiv",
//   position: "Teacher",
// });

// adminUser.name = userFromDataBase.name
// adminUser.age = userFromDataBase.age

// function sum(a, b, ...rest) {
//   console.log(a, b, c, rest);
//   return a + b;
// }

// // sum(1, 2, 2, 23, 2, 323, 23, 2, 32);

// const numbers = [4, 3, 6, 5];

// sum(1, 2, ...numbers);

// const a = [1, 2, 3]; // apwodkwpodkpwodkwopk
// const b = [...a]; // 8h3uhdnbuhsfefuheuhf

// console.log(a === b);

// const obj = {
//   name: "Ivan",
//   name: "Anna",
// };

// console.log(obj);

// const f = { A: 1, B: 2 };
// const s = { A: 3, C: 4 };

// const res = {
//   A: 4,
//   // { A: 4 }

//   ...f, // { A: 1, B: 2 };
//   // { A: 1, B: 2 }

//   ...s, // { A: 3, C: 4 };
//   //  { B: 2, A: 3, C: 4 }

//   C: 6,
//   //  { B: 2, A: 3, C: 6 }
// };

// console.log(res);

// <=== QUESTIONS

// Модуль 3 Заняття 6. Деструктуризація та rest/spread

// # ->
// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));

  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// Було
// console.log(calcBMI("88,3", "1.75"));
// console.log(calcBMI("68,3", "1.65"));
// console.log(calcBMI("118,3", "1.95"));

// Очікується
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );

// # ->
// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// Очікується
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// # ->
// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// Було
// console.log(getBotReport("Cyberdyne Systems", 150, 50));

// Очікується
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// # ->
// Example 4 - Деструктуризація
// Перепиши функцію так,
// щоб вона приймала об'єкт параметрів із властивостями companyName та stock
// та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock, productName = "products" }) {
//   let total = 0;

//   for (const value of Object.values(stock)) {
//     total += value;
//   }

//   //   for (const key in stock) {
//   //     if (stock.hasOwnProperty(key)) {
//   //       total += stock[key];
//   //     }
//   //   }

//   return `${companyName} has ${total} ${productName} in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     productName: "bots",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

// # ->
// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так,
// щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt,
// а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     createdAt: Date.now(), // timestamp [number] from 1970 year
//     list: "default",
//     ...partialContact,
//   };
// }

// const contact = {
//   name: "Mango",
//   email: "mango@mail.com",
//   list: "friends",
// };

// console.log(createContact(contact));
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
//   // Як перевести з десяткової системи в двійкову?
//   // Як перевести з десяткової системи в 36-у?
// }

// # ->
// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так,
// щоб вона повертала новий об'єкт із властивістю fullName,
// замість firstName та lastName.

// function transformUsername({
//   firstName = "Default",
//   lastName = "",
//   ...newUser
// }) {
//   return {
//     fullName: firstName + " " + lastName,
//     createdAt: Date.now(),
//     ...newUser,
//     updatedAt: Date.now(),
//   };
// }

// const user = transformUsername({
//   id: 1,
//   firstName: "Jacob",
//   lastName: "Mercer",
//   email: "j.mercer@mail.com",
//   friendCount: 40,
// });

// console.log(user);

// console.log(transformUsername(user));

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// "не можу зрозуміти що не так.
// Напиши функцію getAllPropValues(propName),
// яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень властивості з
// таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям,
// функція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propValues = [];

//   for (const product of products) {
//     const value = product[propName];
//     if (value) propValues.push(value);
//   }

//   return propValues;
// }

// // Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// // Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// // Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// // Виклик getAllPropValues("category") повертає []

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));
// // не приймає автоперевірка"
