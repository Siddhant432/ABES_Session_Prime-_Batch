//const s=(a,b)=>{
//    const ans=a+b
//    return ans
//}
//
//const printPretty=(txt)=>{
//    console.log("------")
//    console.log(txt)
//    console.log("-----")
//}
//
//const res=s(10,20)
//printPretty(res)
//printPretty(s(10,20))

//callback

//const sum=(a,b,c)=>{    // sum is higher order function 
//    const ans=a+b
//    c(ans)
//}
//
//const printPretty=(txt)=>{ // printPretty is callback function which is passed as argument in HOF
//    console.log("------")
//    console.log(txt)
//    console.log("-----")
//}
//
//sum(20,30,printPretty);


const getMetadat=()=>{
    const name=prompt("pls enter your name")
    console.log("Hello",name)
    const numOfSubText=prompt("pls enter the no of subject")
    const numOfSub=parseInt(numOfSubText)
    return numOfSub
}
const getSub=(num)=>{
    const record={}
    for(let i=0;i<num;i++){
        const subName=prompt(`pls enter sub name ${i}`)
        const mark=Number(prompt(`pls enter the marks for ${subName}`))
        record[subName]=mark
    }
    //console.log(record)
    return record
}

// for each
const getPercent=(record)=>{
    const mar=Object.values(record)
    let s=0
    mar.forEach((ele)=>{
        s+=ele
    })
    return s/mar.length

    

}
const getHighestScoringSub=(obj)=>{
    const sub=Object.keys(obj)
    const mar=Object.values(obj)
    let i=-1
    let s=0
    mar.forEach((ele,x)=>{
        if(s<ele){
            s=ele
            i=x
        }
    })
    return sub[i]
}

const getGrade=(percentage)=>{
    const grades=[
        [60,"B"],
        [70,"B+"],
        [80,"A"],
        [90,"A+"]

    ]
    let grade=""
    grades.forEach((arr)=>{
        if(percentage>=arr[0]){
            grade=arr[1]
        }
    })
}

//const n=getMetadat();
//const r=getSub(n)
//const record={
//    eng:10,
//    math:20,
//    hindi:30
//}
//const percentage=getPercent(record)
//const getHighestscoring=getHighestScoringSub(record);
//const getgrade=getGrade(percentage)
//console.log(percentage)
//console.log(getHighestscoring)

const arr=[10,20,30]

//using map
const newArr=arr.map((a)=>{
    return a*2
})
// reduce use case 1: sum
const ans=arr.reduce((acc,ele)=>{
    return acc + ele
})
//reduce use case 2:multiply
const mul=arr.reduce((acc,ele)=>{
    return acc * ele
})
const newArr2=arr.reduce((acc,ele)=>{
    acc.push(ele*2)
    return acc
})
//console.log(ans)
//console.log(mul)
//console.log(newArr)
console.log(newArr2)