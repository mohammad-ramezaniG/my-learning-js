function Character(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
}

Character.prototype.attack = function (enemy) {
    console.log(`${this.name} is attacking ${enemy.name}`);
    enemy.takeDamage(10 * this.level);
};

Character.prototype.takeDamage = function (amount) {
    this.health -= amount;
    console.log(`${this.name} lost ${amount} HP`);
};

Character.prototype.showStatus = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Level: ${this.level}`);
    console.log(`Health: ${this.health}`);
};


// Warrior

function Warrior(name, health, level, stamina) {
    Character.call(this, name, health, level);
    this.stamina = stamina;
}

Object.setPrototypeOf(Warrior.prototype, Character.prototype);

Warrior.prototype.heavyAttack = function (enemy) {
    const cost = 75;

    if (this.stamina >= cost) {
        console.log(`${this.name} uses Heavy Attack! to ${enemy.name}`);
        this.stamina -= cost;
        enemy.takeDamage((10 * this.level) + 100);
    } else {
        console.log("Not enough stamina!");
    }
};

Warrior.prototype.addStamina = function (amount) {
    this.stamina += amount;
};


// Mage

function Mage(name, health, level, mana) {
    Character.call(this, name, health, level);
    this.mana = mana;
}

Object.setPrototypeOf(Mage.prototype, Character.prototype);

Mage.prototype.castSpell = function (enemy) {
    const cost = 50;

    if (this.mana >= cost) {
        console.log(`${this.name} casts a spell! to ${enemy.name}`);
        this.mana -= cost;
        enemy.takeDamage((10 * this.level) + cost);
    } else {
        console.log("Not enough mana!");
    }
};

Mage.prototype.addMana = function (amount) {
    this.mana += amount;
};


// Testing

const warrior = new Warrior("Assassin", 800, 20, 400);
const mage = new Mage("FireMage", 750, 10, 250);

mage.castSpell(warrior);
warrior.heavyAttack(mage);

mage.showStatus();
warrior.showStatus();

console.log(warrior.attack === mage.attack); // true

console.log(warrior instanceof Warrior);    // true
console.log(warrior instanceof Character);  // true
console.log(mage instanceof Character);     // true