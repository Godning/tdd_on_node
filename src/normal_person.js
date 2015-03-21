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
    return this.role + this.name + this.attack_action() + another.role + another.name + ',' + another.be_attacked(this);
};
NormalPerson.prototype.attack_action = function(){
    return '攻击了';
};
NormalPerson.prototype.is_alive = function () {
    return this.life > 0;
};
NormalPerson.prototype.be_attacked = function (another) {
    this.life -= another.get_damage_value();
    if(this.life < 0){
        this.life = 0;
    }
    return this.name + '受到了' + another.get_damage_value() + '点伤害,' + this.name + '剩余生命:' + this.life;
};
