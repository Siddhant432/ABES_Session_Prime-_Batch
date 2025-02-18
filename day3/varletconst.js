const temp=()=>{
    if(true){
        var u="Raj"
    }
    console.log(u)
}
temp();

const sumMod10=(a,b)=>{
    const ans=(a+b)%10;
    console.log(ans)
    const printPretty =(txt)=>{
        console.log("-----" ,txt,"-----")
    }
    printPretty(ans)
}
sumMod10(10,34)
