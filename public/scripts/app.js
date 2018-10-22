'use strict';

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 5));

var user = {
    name: 'Andrew',
    cities: ['Philly', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city + "!";
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challenge

var multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number 
    // multiply - return array numbers multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply()); // [1, 2, 3] - 2 - [2, 4, 6]
