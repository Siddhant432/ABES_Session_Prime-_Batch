const fs=require('node:fs')
fs.writeFileSync("./test.txt","hello world")
const onelinerjoke=require('one-liner-joke')
console.log(onelinerjoke.getRandomJoke())


//what happen when we require a module
// resolve and loading --> wrapping --> execution --> returning exports --> caching