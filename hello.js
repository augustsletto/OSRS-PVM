let health = 10;
let gold = 100
let combatLevel = 3;
let attackXP = 0;
let attackLevel = 1;
let strengthXP = 0;
let strengthLevel = 1;
let defenceXP = 0;
let defenceLevel = 1;
let hitpointsXP = 0;
let hitpointsLevel = 10;
let slayerXP = 0;
let slayerLevel = 1;
let maxHit = 0;
let boss = null;
let drops = [];
let currentWeapon = 0;
let inventory = ["Bronze scimitar"];
let combatXp = 0;


const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#textbox");

const monsterInfo = document.querySelector("#monster-info");
const playerInfo = document.querySelector("#player-info");


const invLocations = document.querySelector(".battle-menu");





const locations = [
    {
    name: "Home",
    "button text": ["Inventory", "Spellbook", "Skill", "Equipment"],
    "button functions": [goInventory, goSpellbook, goSkill, goEquipment],
    text: "You are in Lumbridge. The town is bustling with activity. You see a shop, a training area, and a slayer master. You can also fight some monsters."
},
    {
    name: "Inventory",
    "button text": ["Eat", "Pot", "Teleport", "Back"],
    "button functions": [eatFood, drinkPot, goTeleport, goBack],
    text: "You are in your inventory. You can eat food, drink potions, or teleport away."


    },
    {
    name: "Spellbook",
    "button text": ["Grand Exchange", "Slayer", "Bosses", "Back"],
    "button functions": [goGrandExchange, goSlayer, goBosses, goBack],
    text: "You are in the spellbook. You can teleport to different locations."
    },
    {
    name: "Skill",
    "button text": [`Attack{$attackLevel}`, `Strength{$strengthLevel}`, `Defence{$defenceLevel}`, `Slayer{$slayerLevel}`],
    "button functions": [ goWeapons, goWeapons, goArmor, goSlayerMonsters],
    text: "You are in the skill menu. Click on a skill to view level requirements."
    },
   

];


button1.onClick = goInventory;
button2.onClick = goSpellbook;
button3.onClick = goSkill;
button4.onClick = goEquipment;

function update(locations) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button1.onClick = location["button functions"][0];
    button2.onClick = location["button functions"][1];
    button3.onClick = location["button functions"][2];
    button4.onClick = location["button functions"][3];
    text.innerText = location.text;
}



function goBack() {
    update(locations[0]);
  }
function goInventory() {
    update(locations[1]);
    }
function goSpellbook() {
    update(locations[2]);
    }
function goSkill() {
    update(locations[3]);
    }
    
function goEquipment() {
    update(locations[3]);
    } 



   


const weapons = [
    {name: "Bronze scimitar", attackBonus: 7, strengthBonus: 6},
    {name: "Iron scimitar", attackBonus: 10, strengthBonus: 9},
    {name: "Rune scimitar", attackBonus: 45, strengthBonus: 44},
    {name: "Dragon scimitar", attackBonus: 67, strengthBonus: 66},
    {name: "Abyssal whip", attackBonus: 82, strengthBonus: 82},
    {name: "Dragon claws", attackBonus: 57, strengthBonus: 56},
    {name: "Elder maul", attackBonus: 135, strengthBonus: 147},
    {name: "Armadyl Godsword", attackBonus: 132, strengthBonus: 132},
    {name: "Bandos Godsword", attackBonus: 132, strengthBonus: 132},
    {name: "Saradomin Godsword", attackBonus: 132, strengthBonus: 132},
    {name: "Zamorak Godsword", attackBonus: 132, strengthBonus: 132},
    {name: "Osmumten's fang", attackBonus: 105, strengthBonus: 103},
    {name: "Armadyl crossbow", attackBonus: 100, strengthBonus: 100},
    {name: "Rune crossbow", attackBonus: 60, strengthBonus: 60},
    {name: "Magic shortbow", attackBonus: 55, strengthBonus: 55},
    {name: "Twisted bow", attackBonus: 150, strengthBonus: 150},
    {name: "Dragon hunter crossbow", attackBonus: 95, strengthBonus: 95, setEffect: "Deals 30% more damage to dragons", multiplier: 1.3},
    {name: "Toxic blowpipe", attackBonus: 60, strengthBonus: 40},
    

]

const monsters = [
    {name: "Goblin", level: 2, hitpoints: 5, maxHit: 1, drops: ["Bones", "Bronze dagger", "Bronze sword"], slayerXP: 5},
    {name: "Cow", level: 2, hitpoints: 8, maxHit: 1, drops: ["Bones", "Cowhide", "Raw beef"], slayerXP: 8},
    {name: "Abyssal demon", level: 124, hitpoints: 150, maxHit: 8, drops: ["Abyssal whip", "Abyssal bludgeon"], slayerXP: 150},
];


const barrows = [
    {name: "Dharok the Wretched", level: 115, hitpoints: 115, maxHit: 27, drops: ["Dharok's greataxe", "Dharok's platebody", "Dharok's platelegs", "Dharok's helm"], slayerXP: 115},
    {name: "Guthan the Infested", level: 115, hitpoints: 115, maxHit: 27, drops: ["Guthan's warspear", "Guthan's platebody", "Guthan's chainskirt", "Guthan's helm"], slayerXP: 115},
    {name: "Karil the Tainted", level: 115, hitpoints: 115, maxHit: 27, drops: ["Karil's crossbow", "Karil's leathertop", "Karil's leatherskirt", "Karil's coif"], slayerXP: 115},
    {name: "Torag the Corrupted", level: 115, hitpoints: 115, maxHit: 27, drops: ["Torag's hammers", "Torag's platebody", "Torag's platelegs", "Torag's helm"], slayerXP: 115},
    {name: "Verac the Defiled", level: 115, hitpoints: 115, maxHit: 27, drops: ["Verac's flail", "Verac's brassard", "Verac's plateskirt", "Verac's helm"], slayerXP: 115},
    {name: "Ahrim the Blighted", level: 115, hitpoints: 115, maxHit: 27, drops: ["Ahrim's staff", "Ahrim's robetop", "Ahrim's robeskirt", "Ahrim's hood"], slayerXP: 115},
];  



const bosses = [

    {name: "Elvarg",
    level: 83,
    hitpoints: 80,
    maxHit: 8,
    drops: ["Dragon scimitar", "Rune full helm", "Rune platelegs", "Rune platebody"],
    slayerXP: 80},
    

    {name: "General Graardor",
    level: 624,
    hitpoints: 255,
    maxHit: 60,
    drops: ["Pet General Graardor", "Bandos chestplate", "Bandos tassets", "Bandos boots", "Bandos Godsword", "Rune 2h sword", "Rune platebody", "Rune platelegs"],
    slayerXP: 338},

    {name: "Kree'arra",
    level: 580,
    hitpoints: 255,
    maxHit: 69,
    drops: ["Pet Kree'arra ","Armadyl Godsword", "Armadyl chestplate", "Armadyl chainskirt", "Armadyl helmet", "Rune crossbow", "Rune platebody", "Rune platelegs"],
    slayerXP: 357},

    {name: "Commander Zilyana",
    level: 596,
    hitpoints: 255,
    maxHit: 27,
    drops: ["Pet Commander Zilyana", "Saradomin Godsword", "Saradomin sword", "Armadyl crossbow", "Rune platebody", "Rune platelegs"],
    slayerXP: 350},

    {name: "K'ril Tsutsaroth",
    level: 650,
    hitpoints: 255,
    maxHit: 49,
    drops: ["Pet K'ril Tsutsaroth", "Zamorak Godsword", "Zamorakian spear","Staff of the dead", "Steam battlestaff", "Rune platebody", "Rune platelegs"],
    slayerXP: 350.5},

    {name: "Corporeal Beast",
    level: 785,
    hitpoints: 2000,
    maxHit: 65,
    drops: ["Pet Corporeal Critter", "Elysian spirit shield", "Spectral spirit shield", "Arcane spirit shield", "Holy elixir", "Spirit shield", "Rune 2h sword", "Rune platebody", "Rune platelegs"],
    slayerXP: 0},

    {name: "Zulrah",
    level: 725,
    hitpoints: 500,
    maxHit: 41,
    drops: ["Pet Snakeling", "Magic fang", "Serpentine visage", "Toxic Blowpipe", "Uncut onyx", "Rune platebody", "Rune platelegs"],
    slayerXP: 500},

    {name: "Vorkath",
    level: 732,
    hitpoints: 750,
    maxHit: 41,
    drops: ["Vorki", "Dragonbone necklace", "Skeletal visage", "Draconic visage", "Rune platebody", "Rune platelegs", "Superior dragon bones", "Blue dragonhide"],
    slayerXP: 750},

    {name: "Nex",
    level: 1001,
    hitpoints: 3400,
    maxHit: 80,
    drops: ["Pet Nex", "Zaryte crossbow","Torva full helm", "Torva platebody", "Torva platelegs", "Zaryte vambraces", "Anciend godsword", "Rune platebody", "Rune platelegs"],
    slayerXP: 2000
    },

    {name: "The Nightmare",
    level: 814,
    hitpoints: 2400,
    maxHit: 60,
    drops: ["Little Nightmare", "Inquisitor's mace", "Inquisitor's great helm", "Inquisitor's hauberk", "Inquisitor's plateskirt", "Eldritch orb", "Harmonised orb", "Volatile orb", "Nightmare staff", "Rune platebody", "Rune platelegs"],
    slayerXP: 2000},




]




if (location.boss) {
    boss.innerHTML = location.boss;
    const bossImg = boss.querySelector("img");

    if (bossImg) {
        bossImg.classList.add("boss-slide-in");

        bossImg.addEventListener("animationend", () => {
            bossImg.classList.remove("boss-slide-in");
        });
    } else {
        boss.innerHTML = "";
    }
}












