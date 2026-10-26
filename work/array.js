let monthString = "Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек";
let montsArr = monthString.split(',');
console.log(montsArr);
let newMonthString = montsArr.join();
console.log(newMonthString);