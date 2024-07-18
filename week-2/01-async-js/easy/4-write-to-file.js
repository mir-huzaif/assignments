const fs = require("fs")

console.log("about to write to the file");

fs.writeFile("4-write-to-file.txt", "hello world!", err => {
  if(err)
    console.log(err);
  else {
    fs.readFile("4-write-to-file.txt", "utf-8", (err, data) => {
      console.log(data);
    })
  }
})

