var lines = require('fs').readFileSync("C:/shennanigans/advent-2019/3/input.txt", "utf-8")
    .split('\n')
    .filter(Boolean);



var wireOnePoints = [];
var wireTwoPoints = [];
var intersectionPoints = [];
function createListOfPoints() {
    var wireOnePath = lines[0].split(",");
    var wireTwoPath = lines[1].split(",");
    var w1X=0,w1Y=0,stepCounter=1;
    wireOnePath.forEach(function(direction){
        var whichWay =  direction.substring(0,1);
        var howMany = direction.substring(1,direction.length);
        for (var i = 0;i <= howMany-1;i++){

            if (whichWay == "U"){
                 w1Y++;
            }

            if (whichWay == "D"){
                 w1Y--;
            }

            if (whichWay == "L"){
                  w1X--;
            }

            if (whichWay == "R"){
                 w1X++;
            }

            if (wireOnePoints.find(point => point.w1X == w1X && point.w1Y == w1Y) )
            {
                //Already been here, DON'T ADD.
            } else {
                wireOnePoints.push({w1X,w1Y,stepCounter});
                stepCounter++;
            }

   

        }
    });

    var w2X=0,w2Y=0;
    stepCounter=0
    wireTwoPath.forEach(function(direction2){
        var whichWay =  direction2.substring(0,1);
        var howMany = direction2.substring(1,direction2.length);


        for (var i = 0;i <= howMany-1;i++){

            if (whichWay == "U"){
                 w2Y++;
            }

            if (whichWay == "D"){
                 w2Y--;
            }

            if (whichWay == "L"){
                w2X--;
            }

            if (whichWay == "R"){
                 w2X++;
            }

            if (wireTwoPoints.find(point => point.w2X == w2X && point.w2Y == w2Y) )
            {
                //Already been here, DON'T ADD.
            } else {
                wireTwoPoints.push({w2X,w2Y,stepCounter});
                stepCounter++;
            }
        }
    });
}

function findIntersection(){
    //console.log(wireOnePoints);
    //console.log(wireTwoPoints);
    console.log(wireOnePoints.length);
    console.log(wireTwoPoints.length);
    for (const pointOne of wireOnePoints){
        for (const pointTwo of wireTwoPoints){
            //console.log(pointOne.w1X + " " + pointTwo.w2X + " " +  pointOne.w1Y +  " " + pointTwo.w2Y)
            if ( (pointOne.w1X == pointTwo.w2X) && (pointOne.w1Y == pointTwo.w2Y)){
                //console.log("INTERSECTION: " + pointOne.w1X + " " + pointTwo.w2X + " " +  pointOne.w1Y +  " " + pointTwo.w2Y)
                intersectionPoints.push({pointOne,pointTwo});
            }
        }
    }
}

createListOfPoints();
findIntersection();
console.log(intersectionPoints);
stepDistance();
taxiDistance();

function stepDistance(){
    var smallestStepDistance = 0;
    for(const intersection of intersectionPoints) {
    
        distance = intersection.pointOne.stepCounter + intersection.pointTwo.stepCounter;
        console.log("Step-Distance: " + distance);
        if (distance < smallestStepDistance || smallestStepDistance == 0){
            smallestStepDistance = distance;
        }
    }
    console.log("SmallestStep:" + smallestStepDistance);
}

function taxiDistance(){
    var smallestManDistance = 0;
    for(const intersection of intersectionPoints) {
    
        distance = (Math.abs(0 - Math.abs(intersection.pointOne.w1X))) + (Math.abs(0 - Math.abs(intersection.pointOne.w1Y )));
        console.log("Taxi-Distance: " + distance);
        if (distance < smallestManDistance || smallestManDistance == 0){
            smallestManDistance = distance;
        }
    }
    console.log("SmallestTaxi:" + smallestManDistance);
}



