var fs = require("fs");
var readLine = require("readline");

const readInterface = readLine.createInterface({
    input: fs.createReadStream("mass.txt"),
    output: process.stdout,
    console: false
});

var totalVolume = 0;
readInterface.on('line', function(line) {
    var num = Number(line);
    console.log("Incoming Number:" + line);
    console.log("TotalBefore:" + totalVolume);
    totalVolume = totalVolume + allTheFuel(Math.floor(num/3)-2);
    console.log("TotalAfter:" + totalVolume);
});

function allTheFuel(fuel) {
    console.log("AllTheFuel: " + fuel);
    if ((Math.floor(fuel/3) - 2) <= 0) {
        return fuel
    }
    

    return fuel + allTheFuel(Math.floor((fuel/3) - 2));

}