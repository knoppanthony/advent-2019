var fs = require("fs");

fs.readFile("C:/shennanigans/advent-2019/2/IntCode.txt", "utf8", function(err, data) {
    if (err) throw err;
    var origOpList = data.split(",");
    var opList = origOpList;
    var result;
    for(var i = 0; i <= 99; i++){
        for (var j = 0; j <= 99; j++){
            opList = origOpList.slice(0);
            opList[1] = i;
            opList[2] = j;
            result = processOpCodes(opList);
            if (result == 19690720){
                console.log("noun: " + i + " verb: " + j );
                break;
            }
        }
    }

});

function processOpCodes(opList){
    
    for (var i = 0; i < opList.length; i+=4){
        var OP = opList[i];
        var first = opList[i+1];
        var second = opList[i+2];
        var placement = opList[i+3];

        if (OP == 99) {
            return opList[0];
        }

        if (OP == 1){
            opList[placement] = (Number(opList[first]) + Number(opList[second]));
        }

        if (OP == 2){
            opList[placement] = (Number(opList[first]) * Number(opList[second]));
        }

    }


}
