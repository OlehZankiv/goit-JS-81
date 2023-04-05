//
// QUESTIONS ==>

// let howMuckUsersNeedToDelete = 3;

// let res = 5;

// for (let i = 0; i < howMuckUsersNeedToDelete; i += 1) {
//     res -= 1;
//     // #1
//     // i = 0
//     // res = 4
//     // #2
//     // i = 1
//     // res = 3
//     // #3
//     // i = 2
//     // res = 2
//     // #4
//     // i = 3
// }

// console.log(res);
// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

// const user = {
//   email: "some.email@gmail.com",
//   password: "*****",
//   name: "Sergiy",
//   book: {
//     name: "H P",
//   },

//   getName() {
//     return "SOME NAME";
//   },
// };

// const users = [
//   {
//     email: "some.email@gmail.com",
//     password: "*****",
//   },
//   {
//     email: "some2.email@gmail.com",
//     password: "***awdwd**",
//   },
//   {
//     email: "some3.email@gmail.com",
//     password: "**awdwd***",
//   },
// ];

// console.log(user.book.name);

// console.log(Object.entries(user));

// let field = "password"

// user.password
// user[field]

// const data = {
//   name: "ANNA",
//   hello() {},
// };

// const x = 8; // 8
// let y = x; // 28

// y += 20;

// console.log(x, y);

// const car = {
//   model: "BMW",
// }; // car - 0193720642019483190
// const newCar = car; // newCar - 0193720642019483190

// newCar.model = "AUDI"; // 0193720642019483190 -> {} -> model = 'audi'

// console.log(car);

// for (const key in car) {
//   console.log(car[key]);
// }

// <== QUESTIONS
//

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(i + 1 + ": " + arr[i]);
// }

// for (const number of arr) {
//   console.log(number);
// }

// Модуль 3. Заняття 5. Об'єкти

// # ->
// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   // ['name', 'age'...]
//   console.log(`${key}: ${user[key]}`);
// }

// # ->
// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390.
// Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;

// for (const value of Object.values(salaries)) {
//   sum += value;
// }

// console.log(sum);

// # ->
// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName),
// яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// function calcTotalPrice(stones, stoneName) {
//   const foundStones = [];

//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       foundStones.push(stone);
//     }
//   }

//   let sum = 0;

//   for (const stone of foundStones) {
//     sum += stone.price * stone.quantity;
//   }

//   return sum;

//   // // If we have only one stone with certain name
//   //   for (const stone of stones) {
//   //     if (stone.name === stoneName) {
//   //       return stone.price * stone.quantity;
//   //     }
//   //   }
// }

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Смарагд", price: 1000, quantity: 2 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Сапфір", price: 100, quantity: 15 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// const res = calcTotalPrice(stones, "Сапфір");

// console.log(res);

// # ->
// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const OPERATION_TYPES = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
};

const account = {
  limit: 10000,
  balance: 0,
  hideMoney: false,
  transactions: [],

  createTransaction(amount, type) {
    const transactions = {
      id: Math.random().toString(16).substring(2),
      type,
      amount,
    };

    return transactions;
  },

  deposit(amount) {
    const newTransaction = this.createTransaction(
      amount,
      OPERATION_TYPES.DEPOSIT
    );

    if (amount > this.limit) {
      console.error("LIMIT ERROR");
    } else {
      this.balance += amount;
      this.transactions.push(newTransaction);
    }
  },

  withdraw(amount) {
    const newTransaction = this.createTransaction(
      amount,
      OPERATION_TYPES.WITHDRAW
    );

    if (this.balance < amount) {
      console.error("NOT ENOUGHT MONEY");
    } else if (amount > this.limit) {
      console.error("LIMIT ERROR");
    } else {
      this.balance -= amount;
      this.transactions.push(newTransaction);
    }
  },

  getBalance() {
    return this.hideMoney ? ":)" : this.balance;
  },

  toggleBalanceVisabillity() {
    this.hideMoney = !this.hideMoney;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let sum = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },
};

account.deposit(5000);
console.log(account.getBalance());
console.log(account.transactions);

account.withdraw(3500);
account.withdraw(500);
account.withdraw(250);
console.log(account.getBalance());
console.log(account.transactions);

console.log(account.getTransactionDetails(account.transactions[0].id));

console.log(account.getTransactionTotal(OPERATION_TYPES.DEPOSIT));

console.log(account.getBalance());
account.toggleBalanceVisabillity();
console.log(account.getBalance());
account.toggleBalanceVisabillity();
console.log(account.getBalance());
