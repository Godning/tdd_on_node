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
Soldier.prototype.set_weapon = function (weapon) {
    this.weapon = weapon;
};
Soldier.prototype.set_armor = function (armor) {
    this.armor = armor;
};
Soldier.prototype.attack_action = function () {
    return this.weapon.use() + '攻击了'
};
Soldier.prototype.get_damage_value = function () {
    return this.weapon.aggressivity + this.aggressivity;
};
Soldier.prototype.get_hurt = function (aggressivity) {
    return aggressivity - this.armor.defense;
};

