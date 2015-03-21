/**
 * Created by hackeris on 3/21/2015.
 */

NormalPerson = function (name, aggresivity, life) {
    this.name = name;
    this.aggressivity = aggresivity;
    this.life = life;
    this.role = '普通人';
};
NormalPerson.prototype.get_damage_value = function () {
    return this.aggressivity;
};
NormalPerson.prototype.attack = function (another) {
    var hurt = another.get_hurt(this.get_damage_value());
    another.life -= hurt;
    return this.role + this.name + this.attack_action() + another.role + another.name + ',' +
        another.name + '受到了' + hurt + '点伤害,' + another.name + '剩余生命:' + another.life;
};
NormalPerson.prototype.attack_action = function () {
    return '攻击了';
};
NormalPerson.prototype.is_alive = function () {
    return this.life > 0;
};
NormalPerson.prototype.get_hurt = function (aggressivity) {
    return aggressivity;
};
