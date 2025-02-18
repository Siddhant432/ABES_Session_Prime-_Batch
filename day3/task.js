var username=prompt("enter username")
var nsub=prompt("enter no of subjects")
var sub=[]
var marks=[]
for(var i=0;i<nsub;i++){
    sub.push(prompt("enter subject name"))
    marks.push(prompt("enter marks"))
}
var a=0
var b=0

for (let i of marks){
    a+=parseInt(i)
    if(b<parseInt(i)){
        b=parseInt(i)
    }
}
var per=a/parseInt(nsub)
if(per>=90){
    console.log("A+")
}
else if(per>=80 && per<90)console.log("A")
console.log(username)
console.log(per)
console.log("max marks" + b)
