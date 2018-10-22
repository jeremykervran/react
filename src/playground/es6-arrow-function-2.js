const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 5));

const user = {
    name: 'Andrew',
    cities: ['Philly', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city + "!");

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}
console.log(user.printPlacesLived());

// Challenge

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number 
    // multiply - return array numbers multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply()); // [1, 2, 3] - 2 - [2, 4, 6]