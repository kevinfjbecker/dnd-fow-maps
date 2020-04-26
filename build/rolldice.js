
/*
    Matt McLimore / Elrond Hubbard (Elf Ranger)
    Igor Olman / Topdeck (Drawf Warrior)
    Ken Mills / Brother Zark (Human Cleric)
    Carson the Muskrat / Lumpin Lightfingers (Muskrat Thief)
    Gilly Woods the Perky Goth / Laeoretha (Human Witch)
    Kayleigh Hardcastle / Amazona (Human Warrior)
*/

const d = sides => () => Math.round(Math.random() * sides) + 1;

const d6 = d(6);
const d8 = d(8);
const d20 = d(20);

const ndx = (n, dx) => {
    const dice = Array(n).fill(0).map(() => dx());
    const total = dice.reduce((a, b) => a + b);
    const toString = () => `${total}: [${dice.join('][')}]`;
    const valueOf = () => total;
    return {
        dice: dice,
        total: total,
        toString: toString,
        valueOf: valueOf
    };
};

const rollInitiative = (character) => d20() + character.initiative;
const rollAttack = (attacker, defender) => {
    return d20() + attacker.attackBonus > defender.armorClass;
};

goblin = {
    name: 'goblin',
    initiative: 2,
    hitPoints: 7,
    armorClass: 15,
    attackBonus: 4,
    dmg: () => d6() + 2
};

cleric = {
    name: 'cleric',
    initiative: -1,
    hitPoints: 7,
    armorClass: 18,
    attackBonus: 4,
    dmg: () => d8() + 2
};

// todo: these should be actions & stuff
const logInitiativeRoll = (character) => {
    console.log(`${character.name} rolls ${rollInitiative(character)}`);
};

const logAttack = (attacker, defender) => {
    if (rollAttack(attacker, defender)) {
        console.log(`${attacker.name} hits ${defender.name}`);
    } else {
        console.log(`${attacker.name} misses ${defender.name}`);
    }
};

const logDamage = (attacker, defender) => {
    console.log(`${attacker.name} hits ${defender.name} for ${attacker.dmg()} damage`);
};

logInitiativeRoll(goblin);
logInitiativeRoll(cleric);

logAttack(goblin, cleric);
logAttack(cleric, goblin);

logDamage(goblin, cleric);
logDamage(cleric, goblin);

/*
    combat:
        roll for surprise
            surprise round (if characters are surprised)
            {combat round}
        roll for initiative
        repeat
            {combat round}
    
    combat round:
        turn-wise, in initiative order
        roll to hit
        if hit
            roll damage
*/

