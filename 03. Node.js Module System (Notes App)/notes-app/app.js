const validator=require('validator')
console.log(validator.isEmail('foo@bar.com'))
console.log(validator.isEmail('foo@bar'))
console.log(validator.isURL('https://www.geeksforgeeks.org/nodejs-require-module/'))
console.log(validator.isURL('https//www.geeksforgeeks.org/nodejs-require-module'))
