// Convert Feet To Mile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(10560);
console.log(result);


// Wood Caltulator

function woodCalculator(chairWood, tableWood, bedWood){
    var chairWoodCount = chairWood * 1;
    var tableWoodCount = tableWood * 3;
    var bedWoodCount = bedWood * 5;
    var totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWoodCount;
}

var result = woodCalculator(14, 5, 12);
console.log(result);


// Tiny Friend 

function tinyFriend(friends){
    var tiny = friends [0];
    for (var i = 1; i < friends.length; i++) {
        var currentFriend = friends[i];
        if (tiny >= currentFriend){
            tiny = currentFriend;
        }
    }
    return tiny;
}
var result = tinyFriend(['Haider', 'Jabbar', 'Kuddus', 'Rajjak', 'Bublu']);
console.log(result);


// Brick Calculator


