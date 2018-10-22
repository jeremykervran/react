var nameVar = 'Andrew2';
// var nameVar = 'Jeremy';
console.log('nameVar', nameVar);

let nameLet = 'Didier';
nameLet = 'Michel';
console.log('nameLet', nameLet);

const nameConst = 'Lucie';
console.log('nameConst', nameConst);

const urlBase = 'http://github.com';
let urlAdd = '';

if(nameVar === 'Jeremy') {
    urlAdd = '/jeremykervran';
} else if (nameVar === 'Andrew') {
    urlAdd = '/andrew';
} else {
    urlAdd = '/404';
}

const urlFinal = urlBase + urlAdd;
console.log(urlFinal);