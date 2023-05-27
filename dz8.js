// Задание 1

function getResult(arr, callback) {
    console.log(callback(arr));
};

function mult(arr) {
    return Math.round(arr.reduce((a, b) => a * b));
};

function sum(arr) {
    return Math.round(arr.reduce((a, b) => a + b));
};

getResult([3, 4, 1, 9], mult);
getResult([3, 4, 1, 9], sum);

// Задание 2


const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

function getSortedArrayObj() {
    return users.sort(function (a, b) {
        return a.age - b.age;
    });
};

console.log(getSortedArrayObj(users));

// Задание 3
const arr1 = [1, '4', 9, 'two'];
const arr2 = [1, '4', false, 9, 'two'];

const reversArr = (arr) => {
    let reversed = arr.reverse();
    console.log(reversed);
    return reversed;
};

const toNumberArr = (arr) => {
    arr = arr.map(str => { return +str }).filter(function (value) {
        return !Number.isNaN(value);
    });

    console.log(arr);
    return arr;
};
const each = (arr, callback) => {
    callback(arr);
};

each(arr1, reversArr);
each(arr2, toNumberArr);



// Задание 4

const timer = (data) => {
	const interval = setInterval(() => {
		console.log(new Date());
	}, 3000);

	setTimeout(() => {
    clearInterval(interval);
    console.log('Время истекло!')
  }, data * 1000)
};

timer(30);
