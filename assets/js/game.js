

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

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//Reset the enemy health variable
for (var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyhealth = 50;
    fight(pickedEnemyName);
}

// fight function
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {

    //Prompt to fight or Skip    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip or continue
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!")
            //subtract money from playerMoney for skipping
            playerMoney -= 10;
            console.log("playerMoney", playerMoney);
            break;
        }
      }


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
  } //end of while loop
}// end of fight function


