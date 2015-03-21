/**
 * Created by hackeris on 3/21/2015.
 */

NullWeapon = function() {
    this.name = '';
    this.aggressivity = 0;
};
NullWeapon.prototype.use = function(){
    return '';
};

Weapon = function (name, aggresivity){
    this.name = name;
    this.aggressivity = aggresivity;
};
Weapon.prototype.use = function(){
    return '用' + this.name;
};
