function summ(a, b){
    let result;
    a = a*1;
    b = b*1;
    console.log(a,b);
    if(!isNaN(a) && !isNaN(b)) result = a+b;
    else{result = 'Встретилось нечисло';}
    return result;
}
// let a = +prompt();
// let b = +prompt();
let a = prompt('Введите слагаемое 1');
let b = prompt('Введите слагаемое 2');
console.log(summ(a,b));


