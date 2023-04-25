let i=0;
while (i<2) {
    console.log('Привет');
    i++;
}

for (let i = 1; i <= 5; i++) {
        console.log(i);
}

  for (let i = 7; i <= 22; i++) {
        console.log(i);
}

let obj = {"Коля": 200, "Вася": 300, "Петя": 400};
  for (key in obj) {
       console.log(`${key} – зарплата ${obj[key]}`);
}

for (let n = 1000, num = 0; n > 50; num++) {
    n /= 2;
        console.log(n);
        console.log(`Количество итераций ${num}`)
}


    for (let fridayDate = 1; fridayDate <= 31; fridayDate+=7) {
    console.log(`Сегодня пятница, ${fridayDate}-е число. Необходимо подготовить отчет.`);
}
