class Ninja {
    constructor(name, hp = 10, spd = 3, str = 3) {
        this.name = name;
        this.hp = hp;
        this.spd = spd;
        this.str = str;
    }
    sayName() {
        console.log(`Osu! Mi nombre es ${this.name}`);
    }
    showStats() {
        console.log(`Nombre: ${this.name}\nVelocidad: ${this.spd}\nHP: ${this.hp}\n Fuerza: ${this.str}`);
    }
    drinkSake() {
        this.hp += 10;
    }
};

class Sensei extends Ninja {
    constructor(name, hp = 10, spd = 3, str = 3, wisdom = 10) {
        super(name, hp, spd, str)
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log('Tatakae!');
    }
}