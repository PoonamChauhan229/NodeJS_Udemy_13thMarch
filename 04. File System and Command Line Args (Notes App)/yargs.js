const yargs=require("yargs")
//console.log(yargs.argv)

// customize yargs version
yargs.version('1.1.0')

// add remove read list

yargs.command({
    command:"add",
    describe:"Adding Notes",
    handler:()=>{
        console.log("Adding Notes...")
    }
})

yargs.command({
    command:"remove",
    describe:"Removing Notes..",
    handler:()=>{
        console.log("Removing Notes")
    }
})
console.log(yargs.argv)

