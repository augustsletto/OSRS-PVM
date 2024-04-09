function calculateEffectiveLevel(level, gearBonus, prayerBonus = 1) {
    // This function calculates the effective level for either attack or defense
    // Including bonuses from gear and active prayers
    return Math.floor((level + gearBonus) * prayerBonus) + 8;
}

function calculateAttackRoll(attackLevel, attackBonus) {
    // Calculates the attack roll
    return calculateEffectiveLevel(attackLevel, attackBonus);
}

function calculateDefenseRoll(defenseLevel, defenseBonus) {
    // Calculates the defense roll
    return calculateEffectiveLevel(defenseLevel, defenseBonus);
}

function calculateHitChance(attackRoll, defenseRoll) {
    // Simplified hit chance calculation
    if (attackRoll > defenseRoll) {
        return 0.5 + (attackRoll - defenseRoll) / (2 * defenseRoll);
    } else {
        return attackRoll / (2 * defenseRoll);
    }
}

function calculateMaxHit(strengthLevel, strengthBonus) {
    // Simplified max hit calculation
    // Real formula would be more complex
    return Math.floor(1.3 + strengthLevel / 10 + strengthBonus / 80 + strengthLevel * strengthBonus / 640);
}

function simulateHit(attackLevel, attackBonus, defenseLevel, defenseBonus, strengthLevel, strengthBonus) {
    // Simulates whether an attack hits and calculates the damage
    const attackRoll = calculateAttackRoll(attackLevel, attackBonus);
    const defenseRoll = calculateDefenseRoll(defenseLevel, defenseBonus);
    const hitChance = calculateHitChance(attackRoll, defenseRoll);
    const maxHit = calculateMaxHit(strengthLevel, strengthBonus);

    if (Math.random() < hitChance) {
        // If the attack hits, calculate random damage up to max hit
        return Math.floor(Math.random() * (maxHit + 1));
    } else {
        // Attack misses
        return 0;
    }
}

// Example usage:
const attackLevel = 70;
const attackBonus = 50; // Bonus from gear
const defenseLevel = 60;
const defenseBonus = 30; // Bonus from opponent's gear
const strengthLevel = 75;
const strengthBonus = 65; // Bonus from gear

const damage = simulateHit(attackLevel, attackBonus, defenseLevel, defenseBonus, strengthLevel, strengthBonus);
console.log(`Damage dealt: ${damage}`);
