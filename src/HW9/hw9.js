//Task 1
function randomInteger(min, max) {
    let rand = Math.random() * (max - min) + min;
    return Math.round ( rand );
}

console.log ( randomInteger (1, 100) );


//Task 2
let user ={};
user.name = 'Вася';
user.surname = 'Петров'
user.name = 'Сергей';
delete user.name;

console.log (user);


//Task 3
function isEmpty(obj) {
    let obj = 45;
if (isNaN(isEmpty)) let property = false; 
else let property = true;
console.log (property);
};


// if (isEmpty(obj) == 0) {
//     console.log (isEmpty);
// }
// else { 
//     return false;
// }


//Task 4
let salaries = {
    John: 400,
    Jack: 20000,
    test: 'asdasdasd'
}
