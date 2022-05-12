var playerName = window.prompt("What is your robot's name?");
//Note the lack of quotat
ion marks around playerName
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");
//This will do math and log 20
console.log(10 + 10);

//What is this?
console.log("Our robot's name is " + playerName);

var playerName = "Tony the robot";

//Tony the robot is ready for battle!
console.log(playerName + " is ready for battle!")

//"Your robot, Tony the Robot, has won!"
console.log("Your robot " + playerName + ", has won!")

//this creates a function named "fight"

function fight() {
    window.alert("This fight has begun!");
}

// fight();