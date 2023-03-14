const fs=require('fs')
// fs.writeFileSync('notes.txt','This is a file created with NodeJS')
fs.writeFileSync('notes.txt','My name is Poonam')

// const utilisData=require('./utils')
// console.log(utilisData.name)
// console.log(utilisData.sum(3,5))

// Using Destructing:
const {name,add}=require('./utils')
console.log(name)
console.log(add(3,9))


const getNotes=require('./02Challenge')
console.log(getNotes())
