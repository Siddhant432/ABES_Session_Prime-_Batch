console.log("teamB loading..")
//let c=0;

const sum=(...arr)=>{
    //c++;
    //console.log(c)
    const ans=arr.reduce((acc,ele)=>{
        return acc+ele;
    },0)
    return ans;
}

module.exports=sum;