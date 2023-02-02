// // -----------Как метод обекта. В контексте обекта-------------------------------

// const user = {
//   tag: 'Mango',
//   showTag() {
//     //   в момент обявления this его значение никто не знает...
//     console.log('showTag -> this', this);
//   },
// };
// //Значение this присваеваеться здесь, уже в момент вызова
// // С лева от вызова функции стоит обект который вызывает эту функцию и это называеться ВЫЗОВ В КОНТЕКСТЕ ОБЕКТА
// // Значит во время вызова этой функции this будет ссылаться на user (то что с левой стороны от вызова функции)
// user.showTag();

// // ----------------------Вызов функции без обекта---------------------------------------

// const foo = function () {
//   console.log('foo -> this', this);
// };

// // Эта функция вызвана в не обекта тоесть ни какой метод ее не вызывает
// //В таком случае если скрипт выполняеться в строгом режиме то нашь скрипт выполняеться как Undefined
// // (не определено - тоесть ни какой обект эту функцию не вызывает)
// // НЕ в строгом режиме будет ссылаться на обект Window(который описывает нашу вкладку в браузере)
// foo();

// // -----------------------Как метод обекта, но обявлена как внешная функция--------------------

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag - this.tag', this.tag);
// };

// const user = {
//   tag: 'Mango',
// };

// // В обект user добавляем новое свойство showUserTag и записываем ссылку на showTag = function()
// user.showUserTag = showTag;
// consolelog('user', user);

// // Вызов функции showTag через свойство обекта showUserTag
// // В этой строке опреедлилось значение this
// user.showUserTag();

// // -------------------Вызвано без контекста, но обявлена как метод обекта----------------------
// // -------------------Можно пирменять без this-------------------------------------------------

// const user = {
//   tag: 'Mango',

//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag - this.tag', this.tag);
//   },
// };

// // вкладываем в переменную ссылку функцию
// const outerShowTag = user.showTag;
// // мызываем метод с помошью ссылки которая вложена в эту переменную
// //поскольку метод вызван без обекта(контекста) будет undefind
// outerShowTag();

// // -----------------------------------Контекст в колбек функциях-------------------------

// const user = {
//   tag: 'Mango',

//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag - this.tag', this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// // Здесь в функцию invokeAction передаеться ссылка на метод(функцию) showTag
// // и после в функции invokeAction вызываем метод user, showTag (с помошью action();)
// invokeAction(user, showTag);

// // ------------Тренеровка- Пример-------------------------------

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
//   };

//   //   changeColor();Здесь будет undefined так как функция вызываеться не спомошью обекта

//   // Создаем обект sweater
//   const sweater = {
//     color: 'teal',
//   };

//   // Делаем в обекте sweater добавляем новое свойство uptateColor в которое вкладываем ссылку на функцию changeColor
//   sweater.uptateColor = changeColor;

//   //   // Ключевое слово This в этом случае будет ссылаться на обект sweater
//   //   sweater.uptateColor('red');

//   return sweater.uptateColor;
// };

// // Вызываеться сначяла эта функция чтобы потом вызвать вложеную в нее
// // makeChangeColor();

// // Что здесь происходит ?
// //1. Вызываеться функция makeChangeColor()
// // 2. Создаеться функция changeColor
// // 3. Мы в обект  sweater в свойство uptateColor записываем ссылку на функцию changeColor
// // 4. И потом возврашяем значение этой функции строчка 106
// // 5. Это значение будет записано в переменную swapColor
// const swapColor = makeChangeColor();

// // Здесь вызываеться функция makeChangeColor через переменную swapColor(вызываеться она без какого либо обекта поэтому будет undefind)
// swapColor('blue');

// -----------------------------------------CALL() И APPLY() методы функции-----------------------------------------

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// // Здесь мы обрашяемся к переменной в которой лежить функция и говорим что вызови у себя метод call
// // первым аргументом мы передаем обект в контексте которого нужно функцию вызвать а остальные это произвольное количество аргументов которые мы передаем в функцию
// //  и притаком вызове this будет ссылаться на objA обект
// // Тоесть что делает метод call ? Он функцию на которой вызываеться принудительно в этойже строке и вызывает в контексте заданого обекта(ставиться первым в аргументах objA)
// // Можно подставлять разные обекты в контексте которых будет вызываться эта функция но это не привязка ссылки а это работает буквально 1 вызов
// showThis.call(objA, 5, 1, [100, 200, 300]);

// // Метод apply делает тоже самое что и call только синтаксис передачи методов отличяеться, их надо записывать через масив.
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// // -------------------------------Пример call------------------------------------------------

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// // Вызываем функцию changeColor в контексте обекта hat соответственно в this записалась ссылка на этот обект
// // поэтому запись this.color = color; это буквально замена значения свойства у обекта hat (black на orange)
// changeColor.call(het, 'orange');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// // Получяеться здесь происходит тоже самое что и в первом варианте с отличием толлько в том что замена
// // проискодит в обектк sweater так как функция вызвана в его контексте
// changeColor.call(sweater, 'blue');

// // -------------------------- BIND()метод функции-----------------------------------------------
// // он позволяет зделать копию функции с пирвязаным контекстом

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// //Здесь с помошью метода bind делаеться копия функции changeColor(на всегда) и привязываеться к обекту(контекст)
// const changeHatColor = changeColor.bind(hat);
// const changesweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changesweaterColo('red');
// console.log(sweater);

// --------------------------------ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ------------------------------------

// //objC который являеться прототипом для objB
// const objC = {
//   z: 5,
// };
// // зесь мы указали что objC прототип objB
// const objB = Object.create(obgC);
// obgB.y = 2;

// // здесь в свою очередь objB становиться прототипом для objА
// const objA = Object.create(obgB);
// obgB.x = 1;

// console.log('objA', objA);

// console.log(objA.z);

// -----------------------АЛГОРИТМ ПОИСКА СВОЙСТВА В ЦЕПОЧКЕ ПРОТОТИПА-------------------------
// 1.Поиск начинаеться в собственных свойствах
// 2.Если свойства нет в собственных, поиск переходит к цепочке прототипов
// 3.Поиск прикрашяеться при первом совпадении (есть такое свойство)
// 4.Возврашяеться значение свойства

// // (1) Найдет первым так как это собственное свойство
// const obgA = {
//   x: 1,
// };

// console.log(abjA.x);

// //(2)Если указаного свойства нет в собственных идет дальше по цепочке прототипов
// const obgA = {
//   x: 1,
// };

// console.log('abjA', abjA);

// console.log(abjA.y);

// // -----------------------------ФУНКЦИИ КОНСТРУКТОРЫ-------------------------------------------

// // В функции конструкторе ее имя должно указываться с большой буквы и в сушествительно единственном числе(тоесть что мы будем создавать)
// // Деструктуризация обекта d ({}) скобках.
// const Car = function ({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// // У каждой функции есть свойство prototype(это обект)
// // Тоесть при создании создании нового экземпляра с помошью new в него вкладываеться не тллько
// // brand, model, price а и свойство __proto__ которое ссылаеться на Car.prototype
// // Мы можем использовать свойство prototype чтобы добавить какието обшие методы

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Hallo =) ');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// // Теперь на Car.prototype лежит не только стандартные методы а и метод sayHi
// //В нашем обекте (экземпляре) теперь есть ссылка на метод sayHi так как
// // ( при создании создании нового экземпляра с помошью new в него вкладываеться не тллько
// // brand, model, price а и свойство __proto__ которое ссылаеться на Car.prototype)
// // И теперь если вызвать метод sayHi в этом обекте то оно найдет его через цепочку прототипов и вызовит его
// // Вызываеться на 280, 290, 299 строчках
// console.log(Car.prototype);

// // Оператор new создает экземляр(обект который являеться экземпляром класа Car)
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: '35000',
// });
// console.log(myCar);

// // получилось так что у нас есть 1 функция и теперь каждый обект сможет обратиться к этой функции
// // тоесть она каждый раз вызываеться в контексте разного обекта а прототипное наследование позволяет
// // получить доступ к этой функции которой на этом обекте она не сушествует но в прототипе есть
// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: '50000',
// });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({
//   brand: 'Audi',
//   model: 'A6',
//   price: '65000',
// });
// console.log(myCar3);

// myCar3.sayHi();

// // -----------------------ЕШЕ 1 ПРИМЕР--------------------------------

// const User = function ({ emaile, password }) {
//   this.emaile = emaile;
//   this.password = password;
// };

// User.prototype.chengePassword = function (newPassword) {
//   this.password = newPassword;
// };

// const mango = new User({
//   emaile: 'Needlife124@gmail.com',
//   password: 659547,
// });

// console.log(mango);

// mango.chengePassword(55555);
// console.log(mango);
// // Итоги:
// // 1. У каждого обекта есть свойство __proto__
// // 2. В этом свойстве лежить ссылка на его прототип тоесть другой обект
// // 3. При создании литерала обекта в свойство __proto__ записываетья ссылк ана Функция.prototype
// // 4. Функция -конструктор это просто функция
// // 5. Вся магия конструктора происходит благодаря оператору new
// // 6. Если функция вызываеться через new, создает пустрой обект
// // 7. Функции вызываються в контексте созданого обекта
// // 8. В свойство this.__proto__ записываеться ссылка на обект Функция.prototype
// // 9. Ссылка на обект возврашяеться вместо вызова new Функция()

// // --------------------------------СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ-----------------------------------------

// const User = function ({ emaile, password }) {
//   // строчки 336, 337 это публичные свойства
//   this.emaile = emaile;
//   this.password = password;
// };

// // Строчки 341 и 342 это методы на прототипе
// User.prototype.chengePassword = function (newPassword) {
//   this.password = newPassword;
// };

// const mango = new User({
//   emaile: 'Needlife124@gmail.com',
//   password: 659547,
// });

// mango.chengePassword(55555);

// // Свойство logInfo добавляеться не на prototype а в функцию User (а функция это обект)
// // и это свойство не будет доступно в экземплярах потому как в prototype его нет(может быть доступно только в функции User)
// User.logInfo = function (obj) {
//   console.log('User.logInfo -> obj', obj);
//   console.log('emaile', obj.emaile);
//   console.log('password', obj.password);
// };

// User.logInfo(mango);

// User.message = 'Я статическое свойство, меня нет на экземплярах и прототипе';

// // Появилось свойство logInfo(и это метод) и message
// console.dir(User);

// // ------------------------------------------КЛАСЫ--------------------------------------------------------------

// class Car1 {
//   // С помошью static обявляеться (статические)свойства и методы которые доступны только в класе но не в экземпляре
//   static description = 'Клас описываюший автомобиль';

//   static logInfo(carObg) {
//     console.log('Car.logInfo -> carObg', carObg);
//   }

//   //2. Конструктор вызываеться в контексте этого обекта
//   constructor({ brand, model, prise }) {
//     //3. this ссылаеться на обект
//     this.brand = brand;
//     this._model = model;
//     this.prise = prise;
//   }
//   // Все методы которые находяца в класе называються методами класа
//   chengePrice(newPrice) {
//     this.prise = newPrice;
//   }

//   // Имя гетера и сетера не должно совпадать с именем переменной
//   get model() {
//     return this.model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }
// }

// // 1.Создаёться пустой обект
// const carInstance = new Car1({
//   brand: 'Audi',
//   model: 'Q3',
//   prise: 35000,
// });

// Car1.logInfo(carInstance);

// // 4.Привзываеться на свойство __proto__ ссылка на prototype нашего класа
// // и возврашяеться обект вместо вызова new Car1
// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);

// console.log(carInstance);

// // Когда мы просто вызываем через console.log(читаем) то вызываетьчя гетер
// console.log(carInstance._model);

// // Если мы туда чтото пишем то вызываеться сетер
// carInstance.model = 'Q10';
// // Результат после записи в сетер
// console.log(carInstance._model);

// // --------------------------------НАСЛЕДОВАНИЕ-----------------------------------------

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gaimeXP(amaunt) {
//     console.log(`${this.name} получяет ${amaunt} опыта !`);
//     this.xp += amaunt;
//   }
// }

// // С помошью extends клас Warrior наследует клас Hero
// class Warrior extends Hero {
//   // Если твой клас наследует от другово класа то в констркторе класа ребенка(Warrior)
//   //нужно вызвать конструктор класа родителя с помошью super();
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps);
//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} атакует используя ${this.weapon} и убивает врага`);
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warCry, ...restProps } = {}) {
//     super(restProps);
//     this.warCry = warCry;
//   }
//   babyRage() {
//     console.log(this.warCry);
//   }
// }

// // С помошью rest собераем аргументы
// class Mage extends Hero {
//   constructor({ spells, ...restProps }) {
//     super(restProps);
//     this.spells = spells;
//   }
//   cast() {
//     console.log(`${this.name} что-то кастует .... `);
//   }
// }

// const Needlife = new Warrior({ name: 'Needlife', xp: 1000, weapon: 'алибарда' });
// console.log(Needlife);
// Needlife.attack();
// Needlife.gaimeXP(1000);

// const Kabaka = new Berserk({
//   name: 'Kabaka',
//   xp: 1500,
//   weapon: 'Axe',
//   warCry: 'Aaaaarrrr!!!',
// });
// console.log(Kabaka);
// Kabaka.babyRage();
// Kabaka.attack();
// Kabaka.gaimeXP(300);

// const Popy = new Mage({ neme: 'Popy', xp: 500, spells: ['огненый шар'] });
// console.log(Popy);
// Popy.cast();
// Popy.gaimeXP(1000);

// console.log('Needlife.__proto__ === Warrior.prototype', Needlife.__proto__ === Warrior.prototype);

// console.log('Needlife.prototype.__proto__ === Hero.prototype', Hero.prototype);

// console.log(
//   'Hero.prototype.__proto__ === Object.prototype',
//   Hero.prototype.__proto__ === Object.prototype
// );
