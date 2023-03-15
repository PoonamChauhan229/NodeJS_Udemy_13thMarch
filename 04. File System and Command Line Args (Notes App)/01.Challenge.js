const yargs=require('yargs')
yargs.command({
    command:"read",
    describe:"Reading a Note...!",
    handler:()=>{
        console.log("reading the file")
    }

})
yargs.command({
    command:"list",
    describe:"Listing out the notes",
    handler:()=>{
        console.log("Listing out the Notes....")
    }
})

console.log(yargs.argv)
