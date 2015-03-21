/**
 * Created by hackeris on 3/14/2015.
 */

function Monster(name, aggresivity, life) {
    this.name = name;
    this.aggressivity = aggresivity;
    this.life = life;
    this.role = '普通人';
};
Monster.prototype.get_damage_value = function () {
    return this.aggressivity;
};
Monster.prototype.attack = function (another) {
    return this.role + this.name + '攻击了' + another.role + another.name + ',' + another.be_attacked(this);
};
Monster.prototype.is_alive = function () {
    return this.life > 0;
};
Monster.prototype.be_attacked = function (another) {
    this.life -= another.get_damage_value();
    if(this.life < 0){
        this.life = 0;
    }
    return this.name + '受到了' + another.get_damage_value() + '点伤害,' + this.name + '剩余生命:' + this.life;
};

function Weapon(name, aggresivity){
    this.name = name;
    this.aggressivity = aggresivity;
};

function Shield(name, defense) {
    this.name = name;
    this.defense = defense;
}

function Soldier(name, aggresivity, life) {
    Monster.call(this, name, aggresivity, life);
    this.role = '战士';
    this.weapon = null;
    this.sheild = null;
};
Soldier.prototype = Object.create(Monster.prototype);
Soldier.prototype.constructor = Soldier;
Soldier.prototype.set_weapon = function(weapon) {
    this.weapon = weapon;
};
Soldier.prototype.set_shield = function (shield) {
    this.sheild = shield;
};
Soldier.prototype.attack = function (another) {
    return this.role + this.name + (this.weapon ? "用" + this.weapon.name : "") + '攻击了'
        + another.role + another.name + ',' + another.be_attacked(this);
};
Soldier.prototype.get_damage_value = function () {
    if(this.weapon){
        return this.weapon.aggressivity + this.aggressivity;
    }
    return this.aggressivity;
};
Soldier.prototype.be_attacked = function (another) {
    var hurt = this.sheild ? another.get_damage_value() - this.sheild.defense : another.get_damage_value();
    this.life -=hurt;
    if(this.life < 0){
        this.life = 0;
    }
    return this.name + '受到了' + hurt + '点伤害,' + this.name + '剩余生命:' + this.life;
};
