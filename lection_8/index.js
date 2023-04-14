//
//
//

// 1. Не має змінювати параметри, які приходять в функцію;
// 2. Не має використовувати або змінювати глобальні значення;
// 3. Має повертати очікуваний результат;

// const data = [
//   { id: 1, name: "BMW" },
//   { id: 2, name: "Mersedes" },
// ];

// const showCarsInfo = (cars = []) => {
//   cars.forEach((car, i) => {
//     console.log(`${i}: ${car.id} -> ${car.name}`);
//   });

//   return cars.length;
// }; // ${i}: ${id} -> ${name}

// const count = showCarsInfo(data);

// console.log(count);

// const data = [
//   { id: 1, name: "BMW", price: 100 },
//   { id: 2, name: "Mersedes", price: 100 },
//   { id: 3, name: "Mersedes", price: 500 },
//   { id: 4, name: "Mersedes", price: 300 },
//   { id: 5, name: "AUDI", price: 200 },
// ];

// const total = data.reduce((total, car) => total + car.price, 0);
// 1. total -> 0; current {id: 1} => 0 + 100 = 100;
// 2. total -> 100; current {id: 2} => 100 + 100 = 200
// 3. total -> 200; current {id: 3} => 200 + 500 = 700;
// 4. total -> 700; current {id: 4} => 700 + 300 = 1000;
// 5. total -> 1000; current {id: 5} => 1000 + 200 = 1200;

// console.log(total);

// const numbers = [10, 100, 1, 2, 2, 100, 10, 1];

// const res = numbers.filter(
//   (number, index) => numbers.indexOf(number) === index
// );
// // 1. (10, 0) => 0 === 0 -> true -> [10]
// // 2. (100, 1) => 1 === 1 -> true -> [10, 100]
// // 3. (1, 2) => 2 === 2 -> true -> [10, 100, 1]
// // 4. (2, 3) => 3 === 3 -> true -> [10, 100, 1, 2]
// // 5. (2, 4) => 3 === 4 -> false -> [10, 100, 1, 2]
// // 6. (100, 5) => 1 === 5 -> false -> [10, 100, 1, 2]
// // 7. (10, 6) => 0 === 6 -> false -> [10, 100, 1, 2]
// // 8. (1, 7) => 2 === 7 -> false -> [10, 100, 1, 2]

// console.log(res);

// const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
// const res = data.find((car) => car.name === 'Mersedes');
// console.log(res);

// const res = data.filter((car) => car.name !== "Mersedes");

// console.log(res);

// const res = data.map((car) => ({ ...car, wrapper: true }));

// console.log(res);

// const numbers = [4, 1, 2, 3];

// const res = numbers.sort();

// console.log(numbers);

// const res = numbers.filter((number) => number > 10);

// Модуль 4. Заняття 8. Перебираючі методи масиву

// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// =>
// Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => cars.map((car) => car.model);

// console.log(getModels(cars));

// =>
// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів
// із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({
//     ...car,
//     price: car.price * (1 - discount),
//   }));

// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));

// =>
// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна,
// яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter((car) => car.price <= threshold);

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// =>
// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) => cars.filter((car) => car.onSale);

// console.log(getCarsWithDiscount(cars));

// =>
// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип,
// яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// console.log(getCarsWithType(cars, "suv"));
// console.log(getCarsWithType(cars, "sedan"));

// =>
// Example 6 - Метод find

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// =>
// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів
// відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = (cars) =>
//   cars.sort((a, b) => a.amount - b.amount);

// console.log(sortByAscendingAmount(cars));

// =>
// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів
// відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = (cars) => cars.sort((a, b) => b.price - a.price);

// console.log(sortByDescendingPrice(cars));

// =>
// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів
// відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку,
// в залежності від значення параметра order.

// const sortByModel = (cars, order) => {
//   const copy = [...cars];
//   switch (order) {
//     case "asc":
//       return copy.sort((a, b) => a.model.localeCompare(b.model));
//     case "desc":
//       return copy.sort((a, b) => b.model.localeCompare(a.model));
//     default:
//       return copy;
//   }
// };

// console.log(sortByModel(cars, "asc"));
// console.log(sortByModel(cars, "desc"));

// // =>
// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну
// кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) =>
//   cars.reduce((total, car) => total + car.amount, 0);

// console.log(getTotalAmount(cars));

// =>
// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
// але тільки тих, які зараз на розпродажі.

// const getAvailableCarNames = (cars) =>
//   getModels(cars.filter((car) => car.onSale));

// console.log(getAvailableCarNames(cars));

// =>
// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale),
// відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);

// console.log(getSortedCarsOnSale(cars));

// 7, 8, 9, 12

// const data = [
//   { id: "a", value: 5 },
//   { id: "b", value: 2 },
//   { id: "c", value: 1 },
//   { id: "d", value: 5 },
//   { id: "d", value: 5 },
//   { id: "d", value: 5 },
//   { id: "d", value: 1 },
//   { id: "d", value: -1 },
//   { id: "d", value: 2 },
//   { id: "d", value: 6 },
//   { id: "d", value: 100 },
// ];
// ;
// data.sort((a, b) => a.id.localeCompare(b.id));
// let count = 0;

// data.sort((l, r) => {
//   return l.value > r.value ? 1 : -1;
// });

// data.sort((l, r) => {
//   return r.value - l.value; // < 0; > 0; 0
// });

// console.log(count);

// console.log(data);

// SORT LEARNING

// [2,3,1]
// 2 <-> 3 -> [2, 3, 1]
// 3 <-> 1 -> [2, 1, 3]
// [2, 1, 3]
// 2 <-> 1 -> [1, 2, 3]
// 2 <-> 3 -> [1, 2, 3]
