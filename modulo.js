// Chocolate method

function getMilk(money) {
    return money % 1.5;

    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var numberOfBottles = Math.floor(money / 1.5);

    console.log("buy " + bottles + " bottles of milk");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5;
}

var change = getMilk(4);
console.log(change);