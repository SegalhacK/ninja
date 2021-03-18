class Ninja {
    constructor(name, hp, spd, str) {
        this.name = name;
        this.hp = 10;
        this.spd = 3;
        this.str = 3;
    }
    sayName() {
        console.log(`Osu! Mi nombre es ${this.name}`);
    }
    showStats() {
        console.log(`Nombre: ${this.name}, Velocidad: ${this.spd}, HP: ${this.hp}`);
    }
    drinkSake() {
        this.hp += 10;
    }
};