// Один из результатов, с сайта learn.javascript.ru
// result = (a + b < 4) ? 'Мало' : 'Много';

// Проверка if внутри диапазона ( https://learn.javascript.ru/logical-ops )
// let Age = prompt ( 'Введите вохраст, от 0 до 100', '' );
// if (Age >= 14 && Age <= 90) {
//     alert ( 'Это нужный диапазон' );
// } else { alert ( 'Не попал :(' ); }

// Проверка if вне диапазона
let Age = prompt ( 'Введите вохраст, от 0 до 100', '' );
if (Age < 14 || Age > 90) {
    alert ( 'Вродь правильно' );
} else { alert ( 'Не :(' ); }
