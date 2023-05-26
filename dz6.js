//1
const arr = [1, 5, 4, 10, 0, 3];
 for (let item of arr) {
     if (item == 10){
         console.log(item);
         break;
     }
 	console.log(item);
 }

 //2
 const aray = [1, 5, 4, 10, 0, 3];
 console.log(aray.indexOf(4));

//3
 const num = [1, 3, 5, 10, 20];
 console.log(num.join(' '));


 //4
 let ar = [];
 for(let i = 0; i < 3; i++){
     ar[i] = [];
     for(let k = 1; k < 4; k++){
         ar[i].push(k - (k-1));
     }
 }
 console.log(ar);
//5
 let array = [1, 1, 1];
 array.push(2, 2, 2);
 console.log(array);

 //6
 let ari = [9, 8, 7, 'a', 6, 5];
 ari.sort();
 ari.pop();
 console.log(ari);

//7
 const arm = [9, 8, 7, 6, 5];
 let digit = Number(prompt('Введите число от 1 до 10'));
 if (arm.indexOf(digit) >= 0){
     alert(`Число ${digit} есть в массиве`)
 }else{
     alert(`Число ${digit} нет в массиве`)
 }

//8
 let str = 'abcdef';
 let sol = str.split('');
 let solReverse = sol.reverse();
 let solJoin = solReverse.join('');

 console.log(solJoin);

//9
 let ami = [[1, 2, 3,],[4, 5, 6]];
 let result = [].concat(...ami);

 console.log(result);

//10
 let count = [1, 4, 6, 3, 9, 5];

 for (let i = 0; i < (count.length - 1); i++) {
    count[i] = count[i] + count[i + 1];
 }

 console.log(count);


 //11
 const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = num.map(function (item) {
   return item ** 2;
 })

 console.log(res);

//12
const getLength = arr => arr.map(str => str.length);

console.log(getLength(['один', 'два', 'три', 'четыре', 'пять']));
console.log(getLength(['слово', '', 'слог', 'длинное предложение', 'буква']));


//13
const getNum = array => array.filter(item => item < 0);

console.log(getNum([1, -3, 5, 6, -4, -9, -7, 2, -8]));

