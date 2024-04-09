let xp = 0;

let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

let username = "Player";
let combatLevel = 3;

let attackLevel = 1;
let attackXP = 0;
let strengthLevel = 1;
let strengthXP = 0;
let defenceLevel = 1;
let defenceXP = 0;
let slayerLevel = 1;
let slayerXP = 0;
let hitpointsLevel = 10;
let hitpointsXP = 0;

let health = hitpointsLevel;
let maxHealth = health;









const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");

const boss = document.querySelector("#boss");

const player = document.querySelector("#player");

const monsterInfo = document.querySelector("#monster-info");

const attackMonster = document.querySelector("#boss");

const enemyName = document.querySelector("#enemyName");
const enemyLvl = document.querySelector("#enemyLvl");
const enemyHpbar = document.querySelector("#enemyHpbar");
const enemyHealth = document.querySelector("#enemyHp");




// initialize buttons
button1.onclick = () => goToLocation(1);
button2.onclick = () => goToLocation(2);
button3.onclick = () => goToLocation(3);
button4.onclick = () => goToLocation(4);




const playerImage = [`<img src="gear/maxeddscim-removebg-preview.png" alt="gnome">`]



monsters = [
    
    {
    locationname: "13",
    name: "Sarachnis",
    Lvl: 318,
    maxHp: 400,
    currentHp: 400,
    maxHit: 30, // Provide a value if applicable
    drops: ["Example drop 1", "Example drop 2"], // Provide actual drops
    slayerXP: 350, // Provide Slayer experience value if applicable
    chatIcon: `<img src="bossicons/Sraracha_chathead.png" alt="gnome">`,
    bossImage: `<img src="bosses/Sarachnis.png" alt="grrrr">`,
    "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back" ],
    "button functions": [0, 0, 0, 8], // Adjust based on actual function mappings
    },
    {
        locationname: "14",
        name: "Dagannoth Rex",
        Lvl: 303,
        maxHp: 303,
        currentHp: 303,
        maxHit: undefined, // Provide a value if applicable
        drops: ["Example drop 1", "Example drop 2"], // Provide actual drops
        slayerXP: undefined, // Provide Slayer experience value if applicable
        chatIcon: `<img src="bossicons/Dagannoth_Rex.png" alt="gnome">`,
        bossImage: `<img src="bosses/Dagannoth_Rex.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back" ],
        "button functions": [0, 0, 4, 9], // Adjust based on actual function mappings
      },
    {
        locationname: "15",
        name: "Dagannoth Supreme",
        Lvl: 303,
        maxHp: 303,
        currentHp: 303,
        maxHit: undefined, // Define as per game mechanics
        drops: ["Example drop 1", "Example drop 2"], // Replace with actual drops for Dagannoth Supreme
        slayerXP: undefined, // Define Slayer XP if applicable
        chatIcon: `<img src="bossicons/Dagannoth_Supreme.png" alt="gnome">`,
        bossImage: `<img src="bosses/Dagannoth_Supreme.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
        "button functions": [0, 0, 4, 9]
    },
    {
        locationname: "16",
        name: "Dagannoth Prime",
        Lvl: 303,
        maxHp: 303,
        currentHp: 303,
        maxHit: undefined, // As before, define this value as needed
        drops: ["Example drop 1", "Example drop 2"], // Replace with actual drops
        slayerXP: undefined, // Define Slayer XP if applicable
        chatIcon: `<img src="bossicons/Dagannoth_Prime.png" alt="gnome">`,
        bossImage: `<img src="bosses/Dagannoth_Prime.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
        "button functions": [0, 0, 4, 9]
    },
    {
        locationname: "17",
        name: "Dharok the Wretched",
        Lvl: 115,
        maxHp: 115,
        currentHp: 115,
        maxHit: undefined, // Define as needed
        drops: ["Example drop 1", "Example drop 2"], // Actual drops for Dharok the Wretched
        slayerXP: undefined, // Define Slayer XP
        chatIcon: `<img src="bossicons/Dharok_the_Wretched.png" alt="gnome">`,
        bossImage: `<img src="bosses/Dharok_the_Wretched.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
        "button functions": [0, 0, 4, 10]
    },
    {
        locationname: "18",
        name: "Guthan the Infested",
        Lvl: 115,
        maxHp: 115,
        currentHp: 115,
        maxHit: undefined, // Define based on your game's mechanics
        drops: ["Example drop 1", "Example drop 2"], // Update with actual items
        slayerXP: undefined, // Specify the Slayer XP if applicable
        chatIcon: `<img src="bossicons/Guthan_the_Infested.png" alt="gnome">`,
        bossImage: `<img src="bosses/Guthan_the_Infested.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
        "button functions": [0, 0, 4, 10]
    },
    {
        locationname: "19",
        name: "Karil the Tainted",
        Lvl: 115,
        maxHp: 115,
        currentHp: 115,
        maxHit: undefined, // Adjust as necessary
        drops: ["Example drop 1", "Example drop 2"], // Replace with Karil's loot
        slayerXP: undefined, // Add XP rewards
        chatIcon: `<img src="bossicons/Karil_the_Tainted.png" alt="gnome">`,
        bossImage: `<img src="bosses/Karil_the_Tainted.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
        "button functions": [0, 0, 4, 11]
    },
    {
        locationname: "20",
        name: "Torag the Corrupted",
        Lvl: 115,
        maxHp: 115,
        currentHp: 115,
        maxHit: undefined, // Define according to game rules
        drops: ["Example drop 1", "Example drop 2"], // Insert Torag's specific drops
        slayerXP: undefined, // Input Slayer experience value
        chatIcon: `<img src="bossicons/Torag_the_Corrupted.png" alt="gnome">`,
        bossImage: `<img src="bosses/Torag_the_Corrupted.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
        "button functions": [0, 0, 4, 11]
    },
    {
        locationname: "21",
        name: "Verac the Defiled",
        Lvl: 115,
        maxHp: 115,
        currentHp: 115,
        maxHit: undefined, // Specify Verac's max hit
        drops: ["Example drop 1", "Example drop 2"], // Verac's drops
        slayerXP: undefined, // Slayer experience for Verac
        chatIcon: `<img src="bossicons/Verac_the_Defiled.png" alt="gnome">`,
        bossImage: `<img src="bosses/Verac_the_Defiled.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
        "button functions": [0, 0, 4, 12]
    },
    {
        locationname: "22",
        name: "Ahrim the Blighted",
        Lvl: 115,
        maxHp: 115,
        currentHp: 115,
        maxHit: undefined, // Specify Ahrim's maximum damage capability
        drops: ["Ahrim's robetop", "Ahrim's robeskirt", "Ahrim's staff"], // Example drops
        slayerXP: undefined, // Insert Slayer experience reward
        chatIcon: `<img src="bossicons/Ahrim_the_blighted.png" alt="gnome">`,
        bossImage: `<img src="bosses/Ahrim_the_blighted.png" alt="grrrr">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
        "button functions": [0, 0, 4, 12]
    },
    {
        locationname: "29",
        name: "General Graardor",
        Lvl: 624,
        maxHp: 255,
        currentHp: 255,
        maxHit: 60,
        drops: ["Pet General Graardor", "Bandos chestplate", "Bandos tassets", "Bandos boots", "Bandos Godsword", "Rune 2h sword", "Rune platebody", "Rune platelegs"],
        slayerXP: 338,
        chatIcon: `<img src="bossicons/General_Graardor.png" alt="graardor">`,
        bossImage: `<img src="bosses/graardor.png" alt="graardor">`,
        "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back" ],
        "button functions": [0, 0, 4, 25],
        },
        {
            locationname: "30",
            name: "Kree'arra",
            Lvl: 580,
            maxHp: 255,
            currentHp: 255,
            maxHit: undefined, // Specify Kree'arra's maximum damage capability
            drops: ["Pet Kree'arra", "Armadyl helmet", "Armadyl chestplate", "Armadyl chainskirt"], // Example drops
            slayerXP: undefined, // Insert Slayer experience reward
            chatIcon: `<img src="bossicons/Kree'arra_chathead.png" alt="Kree'arra">`,
            bossImage: `<img src="bosses/kreearra.png" alt="Kree'arra">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 25]
        },
        {
            locationname: "31",
            name: "Commander Zilyana",
            Lvl: 596,
            maxHp: 255,
            currentHp: 255,
            maxHit: undefined, // Define Zilyana's max hit
            drops: ["Pet Zilyana", "Saradomin sword", "Saradomin's whisper", "Saradomin's murmur"], // Example loot
            slayerXP: undefined, // Slayer experience
            chatIcon: `<img src="bossicons/Commander_Zilyana_chathead.png" alt="Commander Zilyana">`,
            bossImage: `<img src="bosses/zilyana.png" alt="Commander Zilyana">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 26]
        },
        {
            locationname: "32",
            name: "K'ril Tsutsaroth",
            Lvl: 650,
            maxHp: 255,
            currentHp: 255,
            maxHit: undefined, // K'ril's maximum damage output
            drops: ["Pet K'ril Tsutsaroth", "Zamorakian spear", "Staff of the dead"], // K'ril's drops
            slayerXP: undefined, // Experience points for defeating K'ril
            chatIcon: `<img src="bossicons/K'ril_Tsutsaroth_chathead.png" alt="K'ril Tsutsaroth">`,
            bossImage: `<img src="bosses/kril.png" alt="K'ril Tsutsaroth">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 26]
        },
        {
            locationname: "33",
            name: "Nex",
            Lvl: 1001,
            maxHp: 3400,
            currentHp: 3400,
            maxHit: undefined, // Nex's max hit needs to be defined
            drops: ["Nex pet", "Torva full helm", "Torva platebody", "Torva platelegs"], // Example Nex drops
            slayerXP: undefined, // Slayer XP for defeating Nex
            chatIcon: `<img src="bossicons/Nexling_chathead.png" alt="Nex">`,
            bossImage: `<img src="bosses/Nex.png" alt="Nex">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 26]
        },
        {
            locationname: "34",
            name: "Callisto",
            Lvl: 470,
            maxHp: 2550,
            currentHp: 2550,
            maxHit: undefined, // Define Callisto's max hit based on your game mechanics
            drops: ["Callisto cub", "Tyrannical ring", "Dragon pickaxe"], // Specify drops
            slayerXP: undefined, // Slayer XP for defeating Callisto
            chatIcon: `<img src="bossicons/Callisto_cub_chathead.png" alt="Callisto">`,
            bossImage: `<img src="bosses/Callisto.png" alt="Callisto">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 27]
        },
        {
            locationname: "35",
            name: "Scorpia",
            Lvl: 225,
            maxHp: 200,
            currentHp: 200,
            maxHit: undefined, // Define Scorpia's max hit based on your game's balance
            drops: ["Scorpia's offspring", "Odium shard", "Malediction shard", "Scorpion defender"], // Adjust drops as necessary
            slayerXP: undefined, // Insert Slayer experience reward for Scorpia
            chatIcon: `<img src="bossicons/Scorpia's_offspring_chathead.png" alt="Scorpia">`,
            bossImage: `<img src="bosses/Scorpia.png" alt="Scorpia">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 27] // Adjust function mappings as needed for your game logic
        },
        {
            locationname: "36",
            name: "Venenatis",
            Lvl: 464,
            maxHp: 255,
            currentHp: 255,
            maxHit: undefined, // Venenatis's max hit
            drops: ["Venenatis spiderling", "Treasonous ring", "Dragon pickaxe"], // Drops from Venenatis
            slayerXP: undefined, // Experience for slaying Venenatis
            chatIcon: `<img src="bossicons/Venenatis_spiderling_chathead.png" alt="Venenatis">`,
            bossImage: `<img src="bosses/Venenatis.png" alt="Venenatis">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 28]
        },
        {
            locationname: "37",
            name: "Vet'ion",
            Lvl: 454,
            maxHp: 255,
            currentHp: 255,
            maxHit: undefined, // Vet'ion's maximum damage
            drops: ["Vet'ion jr.", "Ring of the gods", "Dragon pickaxe"], // Vet'ion's loot
            slayerXP: undefined, // Slayer experience points for Vet'ion
            chatIcon: `<img src="bossicons/Vet'ion_jr._chathead.png" alt="Vet'ion">`,
            bossImage: `<img src="bosses/Vet'ion.png" alt="Vet'ion">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 28]
        },
        {
            locationname: "38",
            name: "King Black Dragon",
            Lvl: 276,
            maxHp: 240,
            currentHp: 240,
            maxHit: undefined, // KBD's max hit
            drops: ["Prince Black Dragon", "Dragon med helm", "Kbd heads"], // KBD drops
            slayerXP: undefined, // Experience for defeating KBD
            chatIcon: `<img src="bossicons/King_Black_Dragon.png" alt="King Black Dragon">`,
            bossImage: `<img src="bosses/King_Black_Dragon.png" alt="King Black Dragon">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 0, 28]
        },
        {
            locationname: "39",
            name: "Kalphite Queen",
            Lvl: 333,
            maxHp: 255,
            currentHp: 255,
            maxHit: undefined, // Specify the Kalphite Queen's maximum damage output based on your game's mechanics
            drops: [ "Kq head", "Dragon chainbody", "Dragon 2h sword",  "Kalphite princess", "Jar of sand"], // List of notable drops from the Kalphite Queen
            slayerXP: undefined, // Define the Slayer experience awarded for defeating the Kalphite Queen
            chatIcon: `<img src="bossicons/Kalphite_Princess_chathead.png" alt="Kalphite Queen">`,
            bossImage: `<img src="bosses/Kalphite_Queen.png" alt="Kalphite Queen">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 24] // Adjust these to fit the navigation or action system in your game
        },        
        {
            locationname: "40",
            name: "Zulrah",
            Lvl: 725,
            maxHp: 500,
            currentHp: 500,
            maxHit: undefined, // Define Zulrah's maximum hit based on game mechanics
            drops: ["Pet snakeling", "Magic fang", "Serpentine visage"], // Zulrah's specific drops
            slayerXP: undefined, // Slayer experience for defeating Zulrah
            chatIcon: `<img src="bossicons/Pet_snakeling_chathead.png" alt="Zulrah">`,
            bossImage: `<img src="bosses/Zulrah_(serpentine).png" alt="Zulrah">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 24]
        },
        {
            locationname: "41",
            name: "Phantom Muspah",
            Lvl: 741,
            maxHp: 850,
            currentHp: 850,
            maxHit: undefined, // Define the Phantom Muspah's maximum damage output based on your game's mechanics
            drops: ["Muspah spine","Ancient shards", "Phantom essence", "Spirit diamond" ], // List of notable drops from the Phantom Muspah
            slayerXP: undefined, // Define the Slayer experience awarded for defeating the Phantom Muspah
            chatIcon: `<img src="bossicons/Muphin_(ranged)_chathead.png" alt="Phantom Muspah">`,
            bossImage: `<img src="bosses/Phantom_Muspah_(ranged).png" alt="Phantom Muspah">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 24] // Adjust these to fit the navigation or action system in your game
        },
        {
            locationname: "46",
            name: "Phosani's Nightmare",
            Lvl: 1024,
            maxHp: 3200,
            currentHp: 3200,
            maxHit: undefined, // Specify Phosani's Nightmare's maximum hit based on your game's mechanics
            drops: [
                "Phosani's cudgel", // A powerful weapon exclusive to this encounter
                "Sleepwalker armor pieces", // High-level gear offering unique bonuses
                "Nightmare staff", // Could be a common drop between Phosani's and the regular Nightmare
                "Jar of dreams", // A rare collectible or cosmetic item
                "Little nightmare" // The pet version of the Nightmare
            ], // Define notable loot from Phosani's Nightmare
            slayerXP: undefined, // Determine the Slayer experience awarded for this challenge
            chatIcon: `<img src="bossicons/Little_Nightmare_chathead.png" alt="Phosani's Nightmare">`,
            bossImage: `<img src="bosses/Phosani's_Nightmare.png" alt="Phosani's Nightmare">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 43] // Adjust based on your game's navigation or action system
        },
        {
            locationname: "47",
            name: "Corporeal Beast",
            Lvl: 785,
            maxHp: 2000,
            currentHp: 2000,
            maxHit: undefined, // Define the Corporeal Beast's maximum hit according to your game's mechanics
            drops: [
                "Spirit shield", // A base item for creating powerful shields
                "Holy elixir", // Used to bless spirit shields
                "Sigil of Strength", // Example sigil, customize based on your game's lore
                "Sigil of Elysium", // Another example sigil for high-level shields
                "Pet dark core" // A rare pet drop for prestigious players
            ], // List notable drops from the Corporeal Beast
            slayerXP: undefined, // Specify the Slayer experience awarded for defeating the Corporeal Beast
            chatIcon: `<img src="bossicons/Corporeal_Critter_chathead.png" alt="Corporeal Beast">`,
            bossImage: `<img src="bosses/Corporeal_Beast.png" alt="Corporeal Beast">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 43] // Adjust these to correspond with your game's mechanics
        },
        {
            locationname: "48",
            name: "Corrupted Hunllef",
            Lvl: 894,
            maxHp: 1000,
            currentHp: 1000,
            maxHit: undefined, // Specify the Corrupted Hunllef's maximum hit based on your game's mechanics
            drops: [
                "Corrupted ore", // A rare material for high-level crafting or enhancements
                "Gauntlet cape", // A cosmetic or stat-boosting cape awarded to victors
                "Crystal weapon seed", // A base for creating powerful crystal weaponry
                "Corrupted trophy", // A prestigious item marking the player's achievement
                "Hunllef pet" // A rare pet drop, symbolizing mastery over the encounter
            ], // List notable drops from the Corrupted Hunllef
            slayerXP: undefined, // Define the Slayer experience awarded for defeating the Corrupted Hunllef
            chatIcon: `<img src="bossicons/Corrupted_Youngllef_chathead.png" alt="Corrupted Hunllef">`,
            bossImage: `<img src="bosses/Corrupted_Hunllef.png" alt="Corrupted Hunllef">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 43] // Adjust these to correspond with your game's navigation or action system
        },
        {
            locationname: "49",
            name: "Abyssal Sire",
            Lvl: 350,
            maxHp: 400,
            currentHp: 400,
            maxHit: undefined, // Abyssal Sire's maximum damage output
            drops: ["Abyssal orphan", "Abyssal whip", "Bludgeon spine"], // Abyssal Sire's rewards
            slayerXP: undefined, // Slayer XP for Abyssal Sire
            chatIcon: `<img src="bossicons/Abyssal_orphan_chathead.png" alt="Abyssal Sire">`,
            bossImage: `<img src="bosses/Abyssal_Sire.png" alt="Abyssal Sire">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 44]
        },
        {
            locationname: "50",
            name: "Kraken",
            Lvl: 291,
            maxHp: 255,
            currentHp: 255,
            maxHit: undefined, // Define the Kraken's maximum hit according to your game's mechanics
            drops: [
                "Kraken tentacle", // Used to enhance whips or other weapons
                "Trident of the seas", // A powerful magic weapon
                "Pet kraken", // A rare and coveted pet drop
                "Jar of dirt" // A unique collectible or cosmetic item
            ], // List notable drops from the Kraken
            slayerXP: undefined, // Specify the Slayer experience awarded for defeating the Kraken
            chatIcon: `<img src="bossicons/Pet_kraken_chathead.png" alt="Kraken">`,
            bossImage: `<img src="bosses/Kraken.png" alt="Kraken">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 44] // Adjust these to correspond with your game's navigation or action system
        },        
        {
            locationname: "51",
            name: "Cerberus",
            Lvl: 318,
            maxHp: 600,
            currentHp: 600,
            maxHit: undefined, // Cerberus's max hit
            drops: ["Hellpuppy", "Primordial crystal", "Pegasian crystal", "Eternal crystal"], // Loot from Cerberus
            slayerXP: undefined, // Experience points for defeating Cerberus
            chatIcon: `<img src="bossicons/Hellpuppy_chathead.png" alt="Cerberus">`,
            bossImage: `<img src="bosses/Cerberus.png" alt="Cerberus">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 45]
        },
        {
            locationname: "52",
            name: "Thermonuclear Smoke Devil",
            Lvl: 301,
            maxHp: 240,
            currentHp: 240,
            maxHit: undefined, // Define the Thermonuclear Smoke Devil's maximum hit based on your game's mechanics
            drops: [
                "Smoke battlestaff", // A powerful staff for magic users
                "Occult necklace", // Enhances magical attacks
                "Dragon chainbody", // A rare and valuable piece of armor
                "Pet smoke devil", // A rare pet drop, a smaller version of the smoke devil
                "Jar of smoke" // A collectible or trophy item
            ], // List of notable drops from the Thermonuclear Smoke Devil
            slayerXP: undefined, // Specify the Slayer experience awarded for defeating the Thermonuclear Smoke Devil
            chatIcon: `<img src="bossicons/Pet_smoke_devil_chathead.png" alt="Thermonuclear Smoke Devil">`,
            bossImage: `<img src="bosses/Thermonuclear_Smoke_Devil.png" alt="Thermonuclear Smoke Devil">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 45] // Adjust these to correspond with your game's mechanics and navigation
        },        
        
        {
            locationname: "53",
            name: "Alchemical Hydra",
            Lvl: 426,
            maxHp: 1100,
            currentHp: 1100,
            maxHit: undefined, // Alchemical Hydra's max damage
            drops: ["Ikkle hydra", "Hydra's claw", "Hydra leather"], // Drops from Alchemical Hydra
            slayerXP: undefined, // Slayer experience from Alchemical Hydra
            chatIcon: `<img src="bossicons/Ikkle_Hydra_(serpentine)_chathead.png" alt="Alchemical Hydra">`,
            bossImage: `<img src="bosses/Alchemical_Hydra_(Serpentine).png" alt="Alchemical Hydra">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 45]
        },
        {
            locationname: "56",
            name: "Duke Sucellus",
            Lvl: 768,
            maxHp: 760,
            currentHp: 760,
            maxHit: undefined, // Define as per your game's balance
            drops: ["Item 1", "Item 2"], // Specify actual drops
            slayerXP: undefined, // Specify XP if applicable
            chatIcon: `<img src="bossicons/Baron_chathead.png" alt="Duke Sucellus">`,
            bossImage: `<img src="bosses/Duke_Sucellus.png" alt="Duke Sucellus">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 54], // Adjust based on your game logic
        },
        {
            locationname: "57",
            name: "The Leviathan",
            Lvl: 798,
            maxHp: 900,
            currentHp: 900,
            maxHit: undefined,
            drops: ["Item 1", "Item 2"],
            slayerXP: undefined,
            chatIcon: `<img src="bossicons/Lil'viathan_chathead.png" alt="The Leviathan">`,
            bossImage: `<img src="bosses/The_Leviathan.png" alt="The Leviathan">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 54],
        },
        {
            locationname: "58",
            name: "The Whisperer",
            Lvl: 791,
            maxHp: 900,
            currentHp: 900,
            maxHit: undefined,
            drops: ["Item 1", "Item 2"],
            slayerXP: undefined,
            chatIcon: `<img src="bossicons/Wisp_chathead.png" alt="The Whisperer">`,
            bossImage: `<img src="bosses/The_Whisperer.png" alt="The Whisperer">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 55],
        },
        {
            locationname: "59",
            name: "Vardorvis",
            Lvl: 784,
            maxHp: 700,
            currentHp: 700,
            maxHit: undefined,
            drops: ["Item 1", "Item 2"],
            slayerXP: undefined,
            chatIcon: `<img src="bossicons/Butch_chathead.png" alt="Vardorvis">`,
            bossImage: `<img src="bosses/Vardorvis.png" alt="Vardorvis">`,
            "button text": ["Attack", "Strength", `<img src="playerUtils/Teleport_to_House.png">Teleport`, "Back"],
            "button functions": [0, 0, 4, 55],
        },
        
        
        



];





const locations = [

    {
        name: "Home",
        "button text": [
          `<img src="playerUtils/Inventory.png" alt="Button 1">`, 
          `<img src="playerUtils/Spellbook.png" alt="Button 2">`, 
          `<img src="playerUtils/Stats_icon.png" alt="Button 3">`, 
          `<img src="playerUtils/Worn_equipment.png" alt="Button 4">`
        ],
        "button functions": [() => goToLocation(1), () => goToLocation(2), () => goToLocation(3), () => goToLocation(3)], // Referencing the index of each corresponding location
        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
        
        
      },
      {
        name: "Inventory 1",
        "button text": ["Eat", "Pot", "Switch Weapon", "Back"],
        "button functions": [() => goToLocation(0), () => goToLocation(0), () => goToLocation(0), () => goToLocation(0)], // All back to home for simplification
        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Inventory.`,
        
        
      },
      {
        name: "Spellbook 2",
        "button text": ["G.e", `<img src="playerUtils/Slayer_icon.png" alt="Button 1">`, "Bosses", "Back"],
        "button functions": [() => goToLocation(5), () => goToLocation(6), () => goToLocation(7), () => goToLocation(0)],
        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Spellbook.`,
        
        
      },
      {
        name: "Skill 3",
        "button text": [`<img src="playerUtils/Attack_icon.png" alt="Button 1"> ${attackLevel} `, `<img src="playerUtils/Strength_icon.png" alt="Button 1"> ${strengthLevel}`, "More", "Back"],
        "button functions": [() => goToLocation(0), () => goToLocation(0), () => goToLocation(4), () => goToLocation(0)],
        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
        
        
      },
    
    
    {
    name: "More skill 4",
    "button text": [`<img src="playerUtils/Defence_icon.png" alt="Button 1"> ${defenceLevel}`, `<img src="playerUtils/Hitpoints_icon.png" alt="Button 1"> ${hitpointsLevel}`, `<img src="playerUtils/Slayer_icon.png" alt="Button 1"> ${slayerLevel}`, "Back" ],
    "button functions": [() => goToLocation(0), () => goToLocation(0), () => goToLocation(0), () => goToLocation(0)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    },

    /* Spellbook screens  */ 
    {
    name: "Grand Exhange 5",
    "button text": ["Buy items", "Sell items", "Open bank", "Back" ],
    "button functions": [() => goToLocation(0), () => goToLocation(0), () => goToLocation(0), () => goToLocation(0)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    
    },
    {
    name: "Slayer 6",
    "button text": ["Slayer bosses", "Slayer monsters", "Slayer task", "Back" ],
    "button functions": [() => goToLocation(0), () => goToLocation(0), () => goToLocation(0), () => goToLocation(0)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    },
    {
    name: "Bosses 7",
    "button text": ["Easy bosses", "Medium bosses", "Hard bosses", "Back" ],
    "button functions": [() => goToLocation(8), () => goToLocation(23), () => goToLocation(42), () => goToLocation(2)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    },
    {
    name: "Easy Bosses 8",
    "button text": [`<img src="bossicons/Strange_Old_Man.png">Barrow Brothers`, `<img src="bossicons/Dagannoth_Supreme.png">Dagannoth Kings`, `<img src="bossicons/Sraracha_chathead.png">Sarachnis`, "Back" ],
    "button functions": [() => goToLocation(10), () => goToLocation(9), () => goToLocation(13), () => goToLocation(7)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    },
    {
    name: "Dagannoth Kings 9",
    "button text": [`<img src="bossicons/Dagannoth_Rex.png">Dagannoth Rex`, `<img src="bossicons/Dagannoth_Supreme.png">Dagannoth Supreme`, `<img src="bossicons/Dagannoth_Prime.png">Dagannoth Prime`, "Back" ],
    "button functions": [() => goToLocation(14), () => goToLocation(15), () => goToLocation(16), () => goToLocation(8)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    },
    {
    name: "Barrows Brothers 10",
    "button text": [`<img src="bossicons/Dharok_the_Wretched.png">Dharok the Wretched`, `<img src="bossicons/Guthan_the_Infested.png">Guthan the Infested`, "More", "Back" ],
    "button functions": [() => goToLocation(17), () => goToLocation(18), () => goToLocation(11), () => goToLocation(8)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    },
    {
    name: "Barrows Brothers 2 11",
    "button text": [`<img src="bossicons/Karil_the_Tainted.png">Karil the Tainted`, `<img src="bossicons/Torag_the_Corrupted.png">Torag the Corrupted`, "More", "Back" ],
    "button functions": [() => goToLocation(19), () => goToLocation(20), () => goToLocation(12), () => goToLocation(10)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    },
    {
    name: "Barrows Brothers 3 12",
    "button text": [`<img src="bossicons/Verac_the_Defiled.png">Verac the Defiled`, `<img src="bossicons/Ahrim_the_blighted.png">Ahrim the Blighted`, "More", "Back" ],
    "button functions": [() => goToLocation(21), () => goToLocation(22), () => goToLocation(10), () => goToLocation(11)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    
    }, 
   
    {
    name: "Medium Bosses 23",
    "button text": [`God Wars Dungeon`, `Wilderness bosses`, `More`, "Back" ],
    "button functions": [() => goToLocation(25), () => goToLocation(27), () => goToLocation(24), () => goToLocation(7)],
    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
    
    },
    {
        name: "Medium Bosses 2 24",
        "button text": [`<img src="bossicons/Kalphite_Princess_chathead.png">Kalphite Queen`, `<img src="bossicons/Pet_snakeling_chathead.png">Zulrah`, `<img src="bossicons/Muphin_(ranged)_chathead.png">Phantom Muspah`, "Back" ],
        "button functions": [() => goToLocation(39), () => goToLocation(40), () => goToLocation(41), () => goToLocation(23)],
        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
        
        },
        {
            name: "God Wars Dungeon 25",
            "button text": [`<img src="bossicons/General_Graardor_chathead.png">General Graardor`, `<img src="bossicons/Kree'arra_chathead.png">Kree'arra`, `More`, "Back" ],
            "button functions": [() => goToLocation(29), () => goToLocation(30), () => goToLocation(26), () => goToLocation(23)],
            text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
            
            },
            {
                name: "God Wars Dungeon 2 26",
                "button text": [`<img src="bossicons/Commander_Zilyana_chathead.png">Commander Zilyana`, `<img src="bossicons/K'ril_Tsutsaroth_chathead.png">K'ril Tsutsaroth`, `<img src="bossicons/Nexling_chathead.png">Nex (Very Hard)`, "Back" ],
                "button functions": [() => goToLocation(31), () => goToLocation(32), () => goToLocation(33), () => goToLocation(25)],
                text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                
                },
                {
                    name: "Wilderness Bosses 27",
                    "button text": [`<img src="bossicons/Callisto_cub_chathead.png">Callisto`, `<img src="bossicons/Scorpia's_offspring_chathead.png">Scorpia`, `More`, "Back" ],
                    "button functions": [() => goToLocation(34), () => goToLocation(35), () => goToLocation(28), () => goToLocation(23)],
                    text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                    
                    },
                    {
                        name: "Wilderness Bosses 2 28",
                        "button text": [`<img src="bossicons/Venenatis_spiderling_chathead.png">Venenatis`, `<img src="bossicons/Vet'ion_jr._chathead.png">Vet'ion`, `<img src="bossicons/King_Black_Dragon.png">King Black Dragon`, "Back" ],
                        "button functions": [() => goToLocation(36), () => goToLocation(37), () => goToLocation(38), () => goToLocation(27)],
                        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                        
                        },
                        
                        {
                        name: "Hard Bosses 42",
                        "button text": [`Slayer Bosses`, `The Forgotten Four`, `More`, "Back" ],
                        "button functions": [() => goToLocation(44), () => goToLocation(54), () => goToLocation(43), () => goToLocation(7)],
                        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                        
                        },
                        {
                        name: "Hard Bosses 2 43",
                        "button text": [`<img src="bossicons/Little_Nightmare_chathead.png">Phosani's Nightmare`, `<img src="bossicons/Corporeal_Critter_chathead.png">Corporeal Beast`, `<img src="bossicons/Corrupted_Youngllef_chathead.png">Corrupted Hunllef`, "Back" ],
                        "button functions": [() => goToLocation(46), () => goToLocation(47), () => goToLocation(48), () => goToLocation(42)],
                        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                        
                        },
                        {
                        name: "Slayer Bosses 44",
                        "button text": [`<img src="bossicons/Abyssal_orphan_chathead.png">Abyssal Sire`, `<img src="bossicons/Pet_kraken_chathead.png">Kraken`, `More`, "Back" ],
                        "button functions": [() => goToLocation(49), () => goToLocation(50), () => goToLocation(45), () => goToLocation(42)],
                        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                        
                        },
                        {
                        name: "Slayer Bosses 2 45",
                        "button text": [`<img src="bossicons/Hellpuppy_chathead.png">Cerberus`, `<img src="bossicons/Pet_smoke_devil_chathead.png">Thermonuclear Smoke Devil`, `<img src="bossicons/Ikkle_Hydra_(serpentine)_chathead.png">Alchemical Hydra`, "Back" ],
                        "button functions": [() => goToLocation(51), () => goToLocation(52), () => goToLocation(53), () => goToLocation(44)],
                        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                        
                        },
                       
                        {
                        name: "The Forgotten Four 54",
                        "button text": [`<img src="bossicons/Baron_chathead.png">Duke Sucellus`, `<img src="bossicons/Lil'viathan_chathead.png">The Leviathan`, `More`, "Back" ],
                        "button functions": [() => goToLocation(56), () => goToLocation(57), () => goToLocation(55), () => goToLocation(42)],
                        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                        
                        },
                        {
                        name: "The Forgotten Four 2 55",
                        "button text": [`<img src="bossicons/Wisp_chathead.png">The Whisperer`, `<img src="bossicons/Butch_chathead.png">Vardorvis`, `More`, "Back" ],
                        "button functions": [() => goToLocation(58), () => goToLocation(59), () => goToLocation(54), () => goToLocation(54)],
                        text: `<img src="playerutils/Gnome_child_chathead.png" alt="gnome">Welcome to Lumbridge.`,
                        
                        },
                       


                        
                        
                    

]

function goToAllLocations(numbers) {
    numbers.forEach(number => goToLocation(number));
}

goToAllLocations(locationNumbers);

monsters.forEach(monster => {
    let index = parseInt(monster.locationname);

    let location = {
        name: monster.name + " " + monster.locationname,
        "button text": monster["button text"],
        "button functions": monster["button functions"],
        text: monster.chatIcon + "Grrrrrr.",
        boss: monster.bossImage,
        enemyName: monster.name,
        enemyLvl: monster.Lvl,
        enemyHpbar: `<progress value="100" max="100"></progress>`,
        enemyHealth: monster.currentHp + " / " + monster.maxHp,
    };

    locations.splice(index, 0, location)
})


console.log(locations);




function update(location) {

    [button1, button2, button3, button4].forEach((button, i) => {
        button.innerHTML = location["button text"][i];
        button.onclick = location["button functions"][i];
    });
    text.innerHTML = location.text;
    boss.innerHTML = location.boss || '';
    player.innerHTML = location.player || '';
    
    monsterInfo.style.display = location.enemyName ? "" : "none";
    enemyName.innerHTML = location.enemyName || ''; 
    enemyLvl.innerHTML = location.enemyLvl || '';
    enemyHpbar.innerHTML = location.enemyHpbar || '';
    enemyHealth.innerHTML = location.enemyHealth || '';




    if (location.boss) {
        boss.innerHTML = location.boss;
        const bossImg = boss.querySelector("img");

        if (bossImg) {
            bossImg.classList.add("boss-slide-in");

            bossImg.onClick = () => attackEnemy(location);

            bossImg.addEventListener("animationend", () => {
                bossImg.classList.remove("boss-slide-in");
            });
        } else {
            boss.innerHTML = "";
        }
    }


    if (location.player) {
        player.innerHTML = location.player;
        const playerImg = player.querySelector("img");

        if (playerImg) {
            playerImg.classList.add("player-slide-in");

            playerImg.addEventListener("animationend", () => {
                playerImg.classList.remove("player-slide-in");
            });
        } else {
            player.innerHTML = "";
        }
    }
    



}


function attackEnemy(location) {
    console.log("attacking", location.enemyName);
}


function goToLocation(index) {
    update(locations[index]);
}






