console.log(process.argv)
console.log(process.argv[2])
console.log(process.argv[3])


// in terminal
//node app.js Poonam
// node app.js Poonam --title="This is my title"

const command=process.argv[2]
if(command=="add")console.log("Adding NOtes!") 
else if(command=="remove") console.log("Remove Notes!")

// in terminal
// node app.js add
// node app.js remove