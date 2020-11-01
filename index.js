const fs = require("fs");
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
const fullDate = year + "-" + month + "-" + day;

function checkTime(i) {
  return i < 10 ? "0" + i : i;
}

const today = new Date(),
  h = checkTime(today.getHours()),
  m = checkTime(today.getMinutes()),
  s = checkTime(today.getSeconds());

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("enter good night message...\n", function (text) {
  fs.appendFile(
    "README.md",
    `<br>${fullDate} ${h}:${m}:${s} > good night - ${text}`,
    "utf8",
    function (err) {
      if (err) throw err;
      console.log("good night, sleep well!");
      const exec = require("child_process").exec;
      const exec = require("child_process").exec;
      const gitcommit = exec(
        'git commit -a -m "good night"',
        (error, stdout, stderr) => {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          if (error !== null) {
            console.log(`exec error: ${error}`);
          }
          const gitpush = exec("git push", (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            if (error !== null) {
              console.log(`exec error: ${error}`);
            }
          });
        }
      );
    }
  );
  rl.close();
});
