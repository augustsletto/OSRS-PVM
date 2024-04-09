// Define bosses and their drop rates
const bosses = {
    boss1: {
      name: "Ancient Dragon",
      drops: [
        { item: "Dragon's Heart", rate: 5 }, // 5% drop rate
        { item: "Dragon Scale", rate: 20 }, // 20% drop rate
        { item: "Ancient Coin", rate: 75 }  // 75% drop rate
      ]
    },
    boss2: {
      name: "Shadow Assassin",
      drops: [
        { item: "Assassin's Blade", rate: 10 }, // 10% drop rate
        { item: "Shadow Cloak", rate: 15 },    // 15% drop rate
        { item: "Mystical Herb", rate: 75 }    // 75% drop rate
      ]
    }
    // Add more bosses as needed
  };
  
  // Function to determine if an item drops
  function checkDrop(rate) {
    const randomNumber = Math.random() * 100;
    return randomNumber <= rate;
  }
  
  // Function to simulate boss drops
  function getBossDrops(bossKey) {
    const drops = bosses[bossKey].drops;
    const obtainedDrops = [];
  
    drops.forEach(drop => {
      if (checkDrop(drop.rate)) {
        obtainedDrops.push(drop.item);
      }
    });
  
    return obtainedDrops;
  }
  
  // Example usage
  console.log("Defeated Ancient Dragon, obtained: ", getBossDrops('boss1'));
  console.log("Defeated Shadow Assassin, obtained: ", getBossDrops('boss2'));
  