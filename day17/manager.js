console.log("manager loading..")

const obj=require("./teamA.js")
const sum=require("./teamB.js")

console.log(`
    Revenue: ${obj.revenue}
    with profit: ${obj.profit}`)

const revenue=sum(100,100)

console.log(revenue)
