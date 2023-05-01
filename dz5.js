const a = 8;
const b = 4;

function min(a, b) {
    if (a < b) {
      return b;
    } else if(a < b) {
      return a;
    }
    else {
       return b;
    }
  }

  min(a,b);

  console.log(min(a,b))


  
function func(n){
    if(n % 2 == 0){
        return'Число четное';
    }else{
        return'Число нечетное';
    }
}
console.log(func(5));
console.log(func(4));


let Number =+ prompt('Введите число');
function func(Number){
  return Number**2;
}
console.log(func(Number));


function howManyYears () {
    const userYears= prompt('Сколько тебе лет?')
    if (userYears < 0) {
        alert('Вы ввели неправильное значение')
    } else  if (userYears <= 12){
      alert('Привет, друг!')  
    }else{
        alert('Добро пожаловать')
    }
}


let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

function fun (num1, num2) {
    if( !isNaN(num1) && !isNaN(num2) ){
       return console.log(num1*num2)
       }
       else console.log (`Одно или оба значения не являются числом`)
  }
  fun(num1,num2);



function func(){
  let num = prompt(`назовите число возводимое в куб`);
  let n = num**3;
if (isNaN(num)) {
  return 'Это не число';
}
else {
  return `N в кубе равняется ${n}`
} 
}
console.log(func());


const pi = 7.62;

 function getArea () {
    return (this.radius ** 2) * pi;
 }

 function getPerimeter () {
    return (this.radius * 2) * pi;
}

const circle1 = {
    radius: 5,
    getSphereArea: getArea, 
 }

 const circle2 = {
    radius: 12,
   getSpherePerimeter: getPerimeter,
 }

 console.log(circle1.getSphereArea());
console.log(circle2.getSpherePerimeter());
