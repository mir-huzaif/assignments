const fs = require("fs")

console.log("about to read the file");

fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
  console.log(data);
})

for(let i=0; i<1000000000; i++);
console.log("done");