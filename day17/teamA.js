console.log("teamA loading..")

const add=require("./teamB.js")

const ans1=add(20,30);
const ans2=add(20,30,40);
const ans3=add(20,30,40,50);
console.log(ans1)

const profit=100
const expense=30
const revenue=add(profit,expense)

module.exports={
    revenue:revenue,
    profit:profit,
    expense:expense
}
