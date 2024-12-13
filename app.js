console.log("Hello")



const game = {
    party: [],
    difficulty: ["Hard"],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
  console.dir(pokemon, { maxArrayLength: null })


console.log(pokemon[58])

console.log(game)



/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard".
 How would you assign it?


Solve Exercise 3 here:
*/

// const game = {
//     party: [],
//     difficulty: ["Easy", "Med", "Hard"],
//     gyms: [
//       { location: "Pewter City", completed: false, difficulty: 1 },
//       { location: "Cerulean City", completed: false, difficulty: 2 },
//       { location: "Vermilion City", completed: false, difficulty: 3 },
//       { location: "Celadon City", completed: false, difficulty: 4 },
//       { location: "Fuchsia City", completed: false, difficulty: 5 },
//       { location: "Saffron City", completed: false, difficulty: 6 },
//       { location: "Cinnabar Island", completed: false, difficulty: 7 },
//       { location: "Viridian City", completed: false, difficulty: 8 },
//     ],
//     items: [
//       { name: "potion", quantity: 4 },
//       { name: "pokeball", quantity: 8 },
//       { name: "rare candy", quantity: 99 },
//     ],
//   }

  console.log(game)





/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter`
property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/


// Step 1: Select a starter Pokémon
const starterPokemon = pokemon.find((poke) => poke.starter === true);

// Step 2: Add the selected Pokémon to the game.party array
game.party.push(starterPokemon);

// Step 3: Log the updated game object to verify
console.log(game.party);





/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array
method will you use to add them?


Solve Exercise 5 here:
*/


// Assuming 'game' is the game object where 'party' is an array

// Choose three starter Pokémon based on their attributes (all have 'starter' set to true)

// Selecting Bulbasaur for its Grass type and good initial HP
// game.party.push(pokemon[0]); // Bulbasaur: Grass type, HP: 45

// Selecting Charmander for its Fire type which might offer strategic advantages
game.party.push(pokemon[3]); // Charmander: Fire type, HP: 39

// Selecting Squirtle for its Water type, providing a balanced team with type coverage
game.party.push(pokemon[6]); // Squirtle: Water type, HP: 44


// Assuming 'game' is the game object where 'party' is an array

// Pikachu is the 25th Pokémon in the array (index 24 since array indices start at 0)
game.party.push(pokemon[24]); // Pikachu: Electric type, HP: 35


console.log(game.party); // To check the party after adding the Pokémon



// Step 1: Select three Pokémon based on attributes
// const additionalPokemon =
//  pokemon.filter((poke) => poke.hp > 15 && poke.type === starter === true).slice(0, 3);

// Step 2: Add these Pokémon to the game.party array
// game.party.push(...additionalPokemon);

// Step 3: Log the updated game object
// console.log(game.party);





/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/


// Step 1: Assume `gyms` array exists in the `game` object
// Example structure of gyms (if not provided)
// const game = { gyms: [ { name: 'Pewter City', difficulty: 2, completed: false }, ... ] };

// Step 2: Loop through the gyms and update their `completed` property
game.gyms.forEach((gym) => {
    if (gym.difficulty < 3) {
      gym.completed = true;
    }
  });
  
  // Step 3: Log the updated gyms array to verify changes
  console.log(game.gyms);
  


  /*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into 
a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it
evolved into. When working with an array of objects,
the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// const game = {
//     party: [],
//     difficulty: ["Easy", "Med", "Hard"],
//     gyms: [
//       { location: "Pewter City", completed: false, difficulty: 1 },
//       { location: "Cerulean City", completed: false, difficulty: 2 },
//       { location: "Vermilion City", completed: false, difficulty: 3 },
//       { location: "Celadon City", completed: false, difficulty: 4 },
//       { location: "Fuchsia City", completed: false, difficulty: 5 },
//       { location: "Saffron City", completed: false, difficulty: 6 },
//       { location: "Cinnabar Island", completed: false, difficulty: 7 },
//       { location: "Viridian City", completed: false, difficulty: 8 },
//     ],
//     items: [
//       { name: "potion", quantity: 4 },
//       { name: "pokeball", quantity: 8 },
//       { name: "rare candy", quantity: 99 },
//     ],
//   }


  
// Assuming 'pokemon' is the array of Pokémon from your previous input, 
// and 'game' is the game object from your recent input where you've added a starter Pokémon to the party.

// Function to find the index of a Pokémon in the party
function findPokemonInParty(name) {
    return game.party.findIndex(p => p.name === name);
  }
  
  // Function to evolve a starter Pokémon
  function evolveStarter(name) {
    let index = findPokemonInParty(name);
    if (index !== -1) {
      let currentPokemon = game.party[index];
      
      // Determine which evolved form based on the starter
      let evolvedPokemon;
      switch(currentPokemon.number) {
        case 1: // Bulbasaur
          evolvedPokemon = pokemon[1]; // Ivysaur
          break;
        case 4: // Charmander
          evolvedPokemon = pokemon[4]; // Charmeleon
          break;
        case 7: // Squirtle
          evolvedPokemon = pokemon[7]; // Wartortle
          break;
        case 25: // Pikachu
          evolvedPokemon = pokemon[25]; // Raichu
          break;
        default:
          console.log("This Pokémon cannot evolve further.");
          return;
      }
  
      // Replace the current Pokémon with the evolved one
      game.party.splice(index, 1, evolvedPokemon);
      console.log(`${currentPokemon.name} has evolved into ${evolvedPokemon.name}!`);
    } else {
      console.log(`${name} not found in the party.`);
    }
  }
  
  // Example usage:
  // Assuming 'Bulbasaur' was added to the party previously
  evolveStarter("Bulbasaur");
  evolveStarter("Charmander");
  evolveStarter("Squirtle");
  evolveStarter("Pikachu");



  /*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/


  // Assuming 'game' is the game object where 'party' is an array of Pokémon

// Using forEach to iterate over each Pokémon in the party
game.party.forEach(pokemon => {
    console.log(pokemon.name);
  });



  /*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/


pokemon.filter(p => p.starter)
       .forEach(starter => console.log(starter.name));



/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object.
 You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object 
of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/


// Adding the catchPokemon method to the game object
game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);
  };
  
  // Example usage: Catching a Pokémon (let's say we catch Pikachu)
  game.catchPokemon(pokemon[23]); // Arbok is at index 23
  
  // Optional: Check if Arbok has been added to the party
  console.log(game.party);



/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. 
Modify it so that it also decreases the number of pokeballs in your inventory
 each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


// Modified catchPokemon method to decrease pokeballs
game.catchPokemon = function(pokemonObj) {
    // Add the Pokémon to the party
    this.party.push(pokemonObj);
    
    // Find and update the pokeball quantity
    let pokeballItem = this.items.find(item => item.name === "pokeball");
    if (pokeballItem) {
      pokeballItem.quantity--;
    }
  };
  
  // Example usage: Catching a Pokémon (let's say we catch Pikachu again)
  game.catchPokemon(pokemon[24]); // Pikachu is at index 24
  
  // Log to confirm pokeball quantity is decremented
  console.log(game.items);



/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


// Loop through each gym in the `gyms` array
for (let gym of game.gyms) {
    // If the gym's difficulty is less than 6, mark it as completed
    if (gym.difficulty < 6) {
      gym.completed = true;
    }
  }
  
  // Optional: Log the gyms array to see the changes
  console.log(game.gyms);



  /*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/


// Adding the gymStatus method to the game object
game.gymStatus = function() {
    // Create the initial tally object
    const gymTally = {
      completed: 0,
      incomplete: 0
    };
  
    // Iterate through each gym in the game.gyms array
    for (let gym of this.gyms) {
      if (gym.completed === true) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    }
  
    // Log the final tally
    console.log(gymTally);
  };
  
  // Call the method to see the current status
  game.gymStatus();



  /*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/


// Adding the partyCount method to the game object
game.partyCount = function() {
    // Return the length of the party array which represents the number of Pokémon
    return this.party.length;
  };
  
  // Example usage: Log the count of Pokémon in the party
  console.log(game.partyCount());




  /*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is
 similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/


// Loop through each gym in the `gyms` array
for (let gym of game.gyms) {
    // If the gym's difficulty is less than 8, mark it as completed
    if (gym.difficulty < 8) {
      gym.completed = true;
    }
  }
  
  // Optional: Log the gyms array to see the changes
  console.log(game.gyms);


  /*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);