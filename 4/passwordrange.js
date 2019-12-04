var input = 158126-624574;
var minRange = 158126;
var maxRange = 624574;
var validPasswords = []
function determineRange(){
    for (let i = 0; i <= (maxRange-minRange);i++) {
        var currentNum = minRange + i;
        var currentNumString = currentNum.toString();
        var didDecrease = false;
        var hasAdjacentDigits = false;
        //Loop through current number and check rules
        for (let j = 1; j < currentNumString.length;j++){
            
            if (currentNumString[j-1] > currentNumString[j]){
               // console.log(currentNumString + " " + currentNumString[j-1] + " " + currentNumString[j]);
                didDecrease = true;
                break;
            }

            if (currentNumString[j-1] == currentNumString[j])
            {
                hasAdjacentDigits = true;
                if ( (j+1) <= currentNumString.length){
                    if (currentNumString[j+1] == currentNumString[j]) {
                        hasAdjacentDigits = false;
                    }
                }
              
            }

        }

        var isValid = (hasAdjacentDigits && !didDecrease);

        //console.log("Number:" + currentNum + " " + isValid);
        if (isValid) {
            validPasswords.push(currentNum);
        }
    }
}



determineRange();
console.log(validPasswords.length);
console.log(validPasswords[validPasswords.length-1]);