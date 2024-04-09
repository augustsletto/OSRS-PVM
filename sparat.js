location = [{
    name: "Home",
    "button text": [`<img src="playerUtils/Inventory.png" alt="Button 1">`, `<img src="playerUtils/Spellbook.png" alt="Button 1">`, `<img src="playerUtils/Stats_icon.png" alt="Button 1">`, `<img src="playerUtils/Worn_equipment.png" alt="Button 1">`],
    "button functions": [goInventory, goSpellbook, goSkills, goSkills],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    boss: `<img hidden>`
  },
  {
    name: "Inventory",
    "button text": ["Eat", "Pot", "Switch Weapon", "Back"],
    "button functions": [goHome, goHome, goHome, goHome],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    boss: `<img hidden>`
  },
  {
  name: "Spellbook",
  "button text": ["G.e", `<img src="playerUtils/Slayer_icon.png" alt="Button 1">`, "Bosses", "Back"],
  "button functions": [goGrandExchange, goSlayer, goBosses, goHome],
  text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
  boss: `<img hidden>`
  },

  {
    name: "Skill",
    "button text": [`<img src="playerUtils/Attack_icon.png" alt="Button 1"> ${attackLevel} `, `<img src="playerUtils/Strength_icon.png" alt="Button 1"> ${strengthLevel}`, "More", "Back"],
    "button functions": [goHome, goHome, goMoreSkills, goHome],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    boss: `<img hidden>`
    },













];


function goHome() {
    update(locations[0]);
}

function goInventory() {
    update(locations[1]);
}



function goSpellbook() {
    update(locations[2]);
}

function goSkills() {
    update(locations[3]);
}

function goMoreSkills() {
    update(locations[4]);
}

function goGrandExchange() {
    update(locations[5]);
}

function goSlayer() {
    update(locations[6]);
}

function goBosses() {
    update(locations[7]);
}



function easyBosses() {
    update(locations[8]);
}

function goDagKings() {
    update(locations[9]);
}

function goBarrows() {
    update(locations[10]);
}

function goBarrows2() {
    update(locations[11]);
}

function goBarrows3() {
    update(locations[12]);
}

function goKbd() {
    update(locations[13]);
}

function goDagRex() {
    update(locations[14]);
}

function goDagSup() {
    update(locations[15]);
}

function goDagPri() {
    update(locations[16]);
}

function goDharok() {
    update(locations[17]);
}

function goGuthan() {
    update(locations[18]);
}

function goKaril() {
    update(locations[19]);
}

function goTorag() {
    update(locations[20]);
}

function goVerac() {
    update(locations[21]);
}

function goAhrim() {
    update(locations[22]);
}

