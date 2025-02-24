//console.log(document)
//console.dir(document) window object reperesent : B.O.M
//console.dir(window) document object represent :D.O.M

//document is given by window. So,window.document -->document

//document.write("Hello")

//finding / searching element
//1.document.getElementById("id-name") --> null/element
//2. document.getElementsByClassName("class-name") ->iterable[] /[element]
//3. document.getElementsByTagName() --> iteable [] /[element,element,..]
//4. document.querySelector().
//5. document.querySelectorAll()

const ele=document.getElementById("txt-1")
console.log(ele)
ele.style.color="blue"

const ele1=document.getElementsByClassName("abc")
console.log(ele1)
