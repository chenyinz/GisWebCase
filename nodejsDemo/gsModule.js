const fs = require("fs");
const rs = fs.createReadStream("./hero.png");
rs.on("data", (chunk) => {
  console.log(chunk);
});
