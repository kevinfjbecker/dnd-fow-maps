const d = sides => () => Math.round(Math.random() * sides) + 1;

const d6 = d(6)

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
    }
};

const aRoll = ndx(3,d6)
console.log(`Bob rolls ${aRoll}`);
console.log(`Bob rolls ${+aRoll}`);