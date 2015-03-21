/**
 * Created by hackeris on 3/21/2015.
 */

require('./normal_person.js');
require('./weapon.js');
require('./armor.js');

Soldier = function (name, aggresivity, life) {
    NormalPerson.call(this, name, aggresivity, life);
    this.role = '战士';
    this.weapon = new NullWeapon();
    this.armor = new NullArmor();
};
Soldier.prototype = Object.create(NormalPerson.prototype);
Soldier.prototype.constructor = Soldier;
Soldier.prototype.set_weapon = function(weapon) {
    this.weapon = weapon;
};
Soldier.prototype.set_armor = function (armor) {
    this.armor = armor;
};
Soldier.prototype.attack = function (another) {
    return this.role + this.name + this.weapon.use() + '攻击了'
        + another.role + another.name + ',' + another.be_attacked(this);
};
Soldier.prototype.get_damage_value = function () {
    return this.weapon.aggressivity + this.aggressivity;
};
Soldier.prototype.be_attacked = function (another) {
    var hurt = another.get_damage_value() - this.armor.defense;
    this.life -=hurt;
    if(this.life < 0){
        this.life = 0;
    }
    return this.name + '受到了' + hurt + '点伤害,' + this.name + '剩余生命:' + this.life;
};

