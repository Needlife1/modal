//-------------------------------------------- Функция для удаления элемента  с масива

// removeItem(itemToRemove) {
//     В 5 строчке находим индекс элемента который мы будем удалять
//     const i = this.НАЗВАНИЕ - МАСИВА.indexOf(itemToRemove);
//     7 строчка удаляет элемент с помошью метода splice i откуда начинаем удалять а 1 это сколько от начяла убераем елементов
//   this.items.splice(i, 1);

//  ТАКЖЕ МОЖЕМ УДАЛИТЬ С ПООШЬЮ filter:

// removeItem(itemToRemove) {
// this.#items = this.#items.filter(item => item !== itemToRemove);
//   }

// ------------------------------Пример с добавлением символов в строчку с разных сторон --------------------------

// class StringBuilder {

//   constructor(value) {
//     this.value = value;
//   }

//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


