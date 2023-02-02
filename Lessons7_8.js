// // ----------------Замыкание------------------------------
// const fnA = function (parameters) {
//   const innerFunction = function () {
//     console.log(parameters);
//     console.log(innerFunction);
//     console.log('Это вызов innerFunction');
//   };

//   return innerFunction;
// };

// const fnB = fnA;

// console.log();

// console.log(fnB);
// // -------------------------------------------------------

// const makeCheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}.`);
//   };
//   return makeDish;
// };
// const mango = makeCheff('Mango');

// mango('котлета');
// mango('рагу');

// const lorans = makeCheff('Lorans');
// lorans('омлет');
// lorans('чай');

// // ------------------------Стрелочные функции------------------------------

// // Это все одно и тоже но запись разная
// const add = function (a, b, c) {
//   return a + b + c;
// };
// // Явный возврат. Это надо делать когда в нутри тела больше операций чем просто ретерн
// // В этом способе нет локальной переменной (arguments). Поэтому в этом способе доступ
// // ко всем аргументам можно получить через (rest (...args) собрать их)
// const add1 = (a, b, c) => {
//   return a + b + c;
// };
// // Не явный возврат, когда надо вернуть только 1 результат
// const add2 = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));

// // Если мы хотим сразу вернуть обект то надо его обернуть в ()

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());

// --------------------------- ФУНЦИЯ FIND()--------------

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
// ];

// Находит первый подходяший элемент после сего прекрашяет перебор масива

// const findeBalance = 2278;
// const userBalance = users.find(user => user.balance === findeBalance);
// console.log(userBalance);

// Можно прописать функцию  и вписывать значение для поиска

// const findUsersBalance = (usersBalance, userBalance) => {
//   return usersBalance.find(bal => bal.balance === userBalance);
// };

// Тоже самое тоько другой синтаксис:

// const findUsersBalance = (usersBalance, userBalance) =>
//   usersBalance.find(({ balance }) => balance === userBalance);

// console.log(findUsersBalance(users, 2278));
// console.log(findUsersBalance(users, 3793));

// ----------------------------- EVERY() и SOME()---------------------------

// true если все удовлетворяют и folse если хоть 1 не удовлетворяют
// const allIsActive = users.every(names => names.isActive);
// console.log('allIsActive', allIsActive);

// true если хлть 1 условие будет удовлетворять и если не одно не подходит то false
// const allIsActive = users.some(names => names.isActive);
// console.log('allIsActive', allIsActive);

// -----------------REDUCE()-----------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// ACC - это акамулятор, он будет передаваться из предедушего вызова функции передаваться в следуйший
// Если не задавать начяльное значение акамулятора то он берет первое значение колекции (тоесть 5), я задал 0, тоесть итерация начинаеться с 0.
//  NUMBER - это элемент(в него каждую новую этарацию подставляеться новое число из numbers 5, 10, 15 и так дале.)

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);
//   //делаем сложение
//   return acc + number;
// }, 0);
// console.log(total);

// Пример как работает сложение через reduce
// Когда reduce переберает масив до конца то на место return возврашяеться финальное значение акамулятора (тоесть 25 + 50 (75))

//accamulator = 0 => number = 5 -> return 0 + 5
//accamulator = 5 => number = 10 -> return 5 + 10
//accamulator = 0 => number = 15 -> return 15 + 15
//accamulator = 0 => number = 20 -> return 30 + 20
//accamulator = 0 => number = 25-> return 25 + 50

//Считаем обшую зарплату:

// const salary = {
//   mango: 50,
//   polly: 200,
//   ajax: 150,
// };

// const totalSelery = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);

//Рассчитать среднее время проведённое в одной игре для каждого игрока:

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, time) => {
//   return total + time.playtime / time.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// Собераем все теги с твитов:

// const tweets = [
//   { id: 000, likes: 5, tags: ['js', 'nodejs'] },
//   { id: 001, likes: 2, tags: ['html', 'css'] },
//   { id: 002, likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: 003, likes: 8, tags: ['css', 'react'] },
//   { id: 004, likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(allTags);

//РАЗБОР !!!!!
// На 1 этарации:
//acc = [], tweet.tags = ['js', 'nodejs'], returne [...[], ...['js', 'nodejs']]
// На 2 этфрации:
//acc = ['js', 'nodejs'](Получилось так за сшет распыления), tweet.tags = ['html', 'css'], returne [...['js', 'nodejs'], ...['html', 'css']]
// На 3 этарации:
//acc = ['js', 'nodejs', 'html', 'css'], и так дале...

// Введем статистику тегов(это будет масив)
// Логика будет такая: если свойство с ключем tag есть, увеличить его значение на 1
// Если свойства нет с тским ключем что в  tag, зделать и записать 1

// const tagsStats = allTags.reduce((acc, teg) => {
//   console.log(acc);
//   // оно заходит смотрит чему равен teg ? Это js. Акамулятор это пустой обект и оно спарашивает ест ли у тебя свойство js в твоем пустом обекте ? (нет)
//   //Поэтому этот if пропускаеться и добавляет на этот обект свойство с ключом js со значением 1. Поэтому в первой итерации будет js 1.
//   // на 2 итерации смотрит есть ключ nodjs(нет), создает такой ключ со свойством 1.
//   // и если в дальнейших итерациях оно встречяет уже сушествуюший ключ то выполняеться if и делает +1 к значению этого ключя
//   if (acc[teg]) {
//     acc[teg] += 1;

//     return acc;
//   }

//   acc[teg] = 1;

//   return acc;
// }, {});

// console.log(tagsStats);

// Перепишем это все ИМУТАБЕЛЬНО так как в первом вареанте мы по ссылке акамулятора меняем значение свойства и изза этого линтыры будут "кричять"
// Имутабельно -это когда на каждой  итерации нужно создать новый обект

// const tagsStats = allTags.reduce((acc, teg) => {
//   console.log(acc);

//   if (acc[teg]) {
//     // acc[teg] += 1;

//     // return acc;
//     return {
//       //саздаем на каждой итерации новый обект, распыляем туда старый акомулятор(обект) с нашими тегами и в текушее свойство teg ставим +1 от предыдушего
//       ...acc,
//       [tag]: acc[teg] + 1,
//     };
//   }

//   // acc[teg] = 1;

//   // return acc;
//   return {
//     ...acc,
//     [teg]: 1,
//   };
// }, {});

// console.log(tagsStats);

// Также можно записать через тернанрный оператор
// const tagsStats = allTags.reduce((acc, teg) => {
//   console.log(acc);
//   return {
//     ...acc,
//     [teg]: acc[teg] ? acc[teg] + 1 : 1,
//   };
// }, {});

// console.log(tagsStats);

// // что возврашяет acc[teg] ПРИМЕР:
// const user = {
//   name: 'Mango',
// };

// const key = 'name';
// //Значение свойства которое храница в переменной key
// console.log(user[key]);

// -------------------------------- SORT()---------------------------------

// const numbers = [1, 9, 6, 2, 3];
// // Сортирует по возростанию
// // Приводит элементы к строке и сортирует их по Unicode (https://unicode-table.com/en/)
// numbers.sort();
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

// const numbers = [1, 9, 6, 2, 3];
// // Сортировка по возростанию
// const descSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('descSortedNumbers', descSortedNumbers);
// // Сортировка по убыванию
// const ascSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log('ascSortedNumbers', ascSortedNumbers);

// Сортировка обектов

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];
// // Сортируем по автору (по заглавным буквам)
// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author)
// );
// // Сортируем по автору (по заглавным буквам на оборот)
// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author)
// );
// // Сортируем по рейтингу (по возростанию)
// const sortedByAscendingRating = [...books].sort(
//   (fiorstRating, secondRating) => fiorstRating.rating - secondRating.rating
// );
// // Сортируем по рейтингу (по убыванию)
// const sortedByDescentingRating = [...books].sort(
//   (fiorstRating, secondRating) => secondRating.rating - fiorstRating.rating
// );

// Сортировка по количеству друзей

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const sortByDescendingFriendCount = users => {
//   return [...users].sort(
//     (firstFriend, secondFriend) => secondFriend.friends.length - firstFriend.friends.length
//   );
// };

// // ----------------------- flat()---------------------------------

// // Розглаживает глубину масива(глубину можно указывать в скобках после flat())

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat());
// console.log(array.flat(1));
// console.log(array.flat(2));
// console.log(array.flat(3));

// ----------------------- map() и flatMap()---------------------------------

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];
// const course = students.map(student => student.courses);
// console.log(course);

// const course1 = students.flatMap(student => student.courses);
// console.log(course1);

// // -----------------------------Цепочки методов---------------------------

// const numbers = [1, 5, 2, 4, 3];
// // На результате из этих методов вызываеться новый масив
// const sorted = numbers
//   // Здесь фильтруються элементы масива и те которые больше 2 остаються
//   .filter(num => num > 2)
//   // На этом этапе я утраиваю все оставшиеся элементы
//   .map(num => num * 3)
//   //Здесь я сортирую масив по возростанию
//   .sort((a, b) => a - b);

// console.log(sorted);

// // -----------------------Новый синтаксис ?. -----------

// const user = {
//   name: 'Papi',
//   location: {
//     city: 'Lviv',
//   },
// };
// // ?. Это не обезательное свойство которое говорит "если здесь (user?.location?.) folse или этого свойства нет то не будет искать дальше и вместо ошибки выдаст Undefined"
// console.log(user?.location?.city);

// https://lodash.com/ - АДРЕС НА БИБЛИОТЕКУ МЕТОДОЛВ JS (подключяеться в самом начяле bady)
