// Игра 1

function getSeason(){
    while ( true ){
        let monthNum = Number(prompt('Введите номер месяца'));
        if (monthNum == 12 || monthNum == 1 || monthNum == 2){
            alert('Зима');
            break;
        }else if(monthNum == 3 || monthNum == 4 || monthNum == 5){
            alert('Весна');
            break;
        }else if(monthNum == 6 || monthNum == 7 || monthNum == 8){
            alert('Лето');
            break;
        }else if (monthNum == 9 || monthNum == 10 || monthNum == 11){
            alert('Осень');
            break;
        }
            alert( "Такого месяца не существует" ); 
        }
}

// Игра 2

let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function rememberWords(){
    alert(array = array.sort(() => Math.random() - 0.5));

    let firstElement = prompt('Чему равнялся первый элемент массива?');
    let lastElement = prompt('Чему равнялся последний элемент массива?');
    
    if (firstElement.toLowerCase() == array[0].toLowerCase() && lastElement.toLowerCase() == array[array.length - 1].toLowerCase()){
        alert("Поздравляю, вы все угадали!")
    }else if(firstElement.toLowerCase() == array[0].toLowerCase() || lastElement.toLowerCase() == array[array.length - 1].toLowerCase()){
        alert("Вы были близки к победе!")
    }else {
        alert("Вы ответили неверно!")
    }

    
}
