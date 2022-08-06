function printDate(){
    let date = new Date()

console.log("the current date is :", date.getDate())
printMonth()
}


function printMonth(){
    let date = new Date()

    console.log("the current month is :", date.getMonth()+1)
    getBatchInfo()
}


function getBatchInfo(){
    let date = new Date()

console.log("Plutonium", "," ,"W3D3", "," ,"The topic for today is Nodejs module system")
}

module.exports.printDate=printDate