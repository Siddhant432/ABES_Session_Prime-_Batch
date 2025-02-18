// function declarartion
//print("Siddhant")
//function print(a){
//    console.log("hello" ,a)
//}
////print("Sid")
//
//function print(a){
//    console.log("Hello",a)
//}
//function print(a){
//    console.log("hi",a)
//}
//print("Rakesh")


// function assignment
// anonymous function 
//const v=function print(a){
//    console.log("hello",a)
//}
//v("Ram")
//print("Sid")

// arrow function
//const v=(a)=>{
//    console.log("hello",a)
//}
//v("Sid")

function summod(a,b){
    return (a+b)%10
}
const ans=summod(10,20)
console.log(ans)

const a=function summod(a,b){
    return (a+b)%10
}

const l=(a,b)=>(a+b)%10
c=a(20,30)
console.log(c)
console.log(l(10,11))