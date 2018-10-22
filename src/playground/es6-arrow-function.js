// const square = function(x) {
//     return x * x;
// };

// console.log(square(8));

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x*x;

// console.log(squareArrow(9));

const fullName = "Thierry Kervran";
const getFirstName = (totalName) => {
    let firstName = totalName.split(" ")[0];
    return firstName;
}

console.log(getFirstName(fullName));

const getFirstNameArrow = (totalNameArrow) => totalNameArrow.split(" ")[0];

console.log(getFirstNameArrow(fullName));