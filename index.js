// Step 1: Player object (global, state yahan store hoga)
let player = {
  health: 100,
  mana: 50,
  level: 1
};

// Step 2: Function to take damage
function takeDamage(damage) {
  player.health -= damage;
  console.log(`Player took ${damage} damage!`);

  if (player.health <= 0) {
    console.log("Game Over!");
  }

  logState(); // har action ke baad state print karo
}

// Step 3: Function to cast spell
function castSpell(manaCost) {
  if (player.mana >= manaCost) {
    player.mana -= manaCost;
    console.log(`Spell cast successfully! Mana used: ${manaCost}`);
  } else {
    console.log("Not enough mana to cast that spell!");
  }

  logState(); // har action ke baad state print karo
}

// Step 4: Function to log current state
function logState() {
  console.log("Current Player State:", player);
}

// Step 5: Simulation function (sab actions yahan call honge)
function simulateGame() {
  takeDamage(20);  // Player ki health -20
  castSpell(30);   // Mana -30
  castSpell(40);   // Mana insufficient
  takeDamage(90);  // Health 0 se neeche → Game Over
}

// Start Simulation
simulateGame();