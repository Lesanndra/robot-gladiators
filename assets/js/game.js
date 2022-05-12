

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {

    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


//if player chooses to fight. then fight
  if (promptFight === "fight" || "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerATTAck variable
    enemyHealth -= playerHealth;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
   
//check enemy's health
    if (enemyHealth <= 0){
     window.alert(enemyName + " has died!");
    }  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };

//Remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth -= enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " had died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }

  } else if (promptFight === "skip" || promptFight === "SKIP"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes (true), leave fight
    if(confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!")
        //subtract money from playerMoney for skipping
        playerMoney -= 2;
    }
    //if no (false), ask question again by running fight() again
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  };
 // end of fight function
}
// run fight function to start game using the array

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
