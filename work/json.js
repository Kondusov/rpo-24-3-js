// 1. У нас есть строка в формате JSON
const jsonString = '{"name": "Анна", "age": 30}';

console.log(jsonString.name); // вернет undefined
console.log(typeof(jsonString));
// 2. Превращаем строку в объект (Parsing)
const user = JSON.parse(jsonString);
console.log(user.name); // Выведет: Анна
console.log(typeof(user)); // Выведет: object
user.age = 31;

// 3. Превращаем объект обратно в строку (Serialization)
const backToString = JSON.stringify(user);
console.log(backToString); // Выведет: {"name":"Анна","age":31}
console.log(typeof(backToString)); // Выведет: string