const fs = require('fs')
var date = new Date();
var year = date.getFullYear();
var month = String(date.getMonth() + 1).padStart(2, '0');
var day = String(date.getDate()).padStart(2, '0');
var fullDate = year + "-" + month + "-" + day;

function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

var today = new Date(),
h = checkTime(today.getHours()),
m = checkTime(today.getMinutes()),
s = checkTime(today.getSeconds());

function dateTime() {
console.log(fullDate + " " + h + ":" + m + ":" + s)
};

dateTime();

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter good night text...\n", function(text) {
        fs.appendFile('README.md', `<br>${fullDate} ${h}:${m}:${s} > good night - ${text}`, 'utf8',
    function(err) { 
        if (err) throw err;
        console.log("good night, sleep well")
        const exec = require('child_process').exec;
const gitcommit = exec('git commit -a -m "good night"',
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
const gitpush = exec('git push',
(error, stdout, stderr) => {
console.log(`stdout: ${stdout}`);
console.log(`stderr: ${stderr}`);
if (error !== null) {
console.log(`exec error: ${error}`);
    }
});
});
});
        rl.close();
});
