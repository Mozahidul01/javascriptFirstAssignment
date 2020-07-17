// Convert Feet To Mile

function feetToMile (feet) {
    if (0 <= feet) {
        var mile = (feet / 5280);
        return mile;
    }
    else {
        return "Please Enter the positive Value.";
    }
}
var result = feetToMile(10560);
console.log(result);


// Wood Caltulator
function woodCalculator (chair, table, bed) {
    if (0 < chair) {
        var chairWoodCount = chair * 1;
        if (0 < table){
            var tableWoodCount = table * 3;
            if (0 < bed){
                var bedWoodCount = bed * 5;
                var totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;
                return totalWoodCount;
            }
            else {
                return "Please Enter the positive Value.";
            }
        }
        else {
            return "Please Enter the positive Value.";
        }
    }
    else {
        return "Please enter higher value then 0(Zero).";
    }
}

var result = woodCalculator(14, 5, 12);
console.log(result);



// Brick Calculator

function brickCalculator (floor) {
    var bricksPerFoot = 1000;
    if (floor > 0 && floor <= 10) {
        var firstTenFloorHeight = floor * 15;
        var totalBricks = firstTenFloorHeight * bricksPerFoot; 
        return totalBricks;
    }
    else if (floor > 10 && floor <= 20) {
        var downFloorsBricks = 30000;
        var secondTenFloorHeight = floor * 12;
        var totalBricks = (secondTenFloorHeight * bricksPerFoot) + downFloorsBricks;
        return totalBricks;
    }    
    else if (floor >= 21) {
        var downFloorsBricks = 70000;
        var restOfFloorHeight = floor * 10;
        var totalBricks = (restOfFloorHeight * bricksPerFoot) + downFloorsBricks;
        return totalBricks;
    }
    else {
        return "Please enter higher value then 0(Zero).";
    }
}

var result = brickCalculator(17);
console.log(result);


// Tiny Friend 

function tinyFriend (friends) {
    var tinyName = friends [0];
    for (var i = 0; i < friends.length; i++) {
        var currentFriend = friends[i];
        if ( currentFriend.length < tinyName.length) {
            tinyName =  currentFriend;
        }
    }
    return tinyName;  
}

var result = tinyFriend(['Haider', 'Jabbar', 'Kuddus', 'Rajjak', 'Bublu', 'Raju','Karim']);
console.log(result);