/**
 * Created by hackeris on 3/14/2015.
 */
var assert = require("assert");
require('../src/monster.js');
require('../src/soldier.js');
require('../src/weapon.js');
require('../src/armor.js');
require('../src/main.js')

describe('Test of models', function () {

    it('NormalPerson 李四 beat NormalPerson 张三', function () {
        var monster_a = new NormalPerson('张三', 10, 20);
        var monster_b = new NormalPerson('李四', 10, 20);

        var expectText = '普通人李四攻击了普通人张三,张三受到了10点伤害,张三剩余生命:10';
        var result = monster_b.attack(monster_a);

        // expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });

    it('NormalPerson 李四 beat Soldier 张三 without armor', function () {
        var monster_a = new NormalPerson('李四', 10, 20);
        var solider_b = new Soldier('张三', 10, 20);

        var expectText = '普通人李四攻击了战士张三,张三受到了10点伤害,张三剩余生命:10';
        var result = monster_a.attack(solider_b);

        //expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });

    it('NormalPerson 李四 beat Soldier 张三 with armor', function () {
        var monster_a = new NormalPerson('李四', 10, 20);
        var solider_b = new Soldier('张三', 10, 20);
        solider_b.set_armor(new Armor('防具', 5));

        var expectText = '普通人李四攻击了战士张三,张三受到了5点伤害,张三剩余生命:15';
        var result = monster_a.attack(solider_b);

        //expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });

    it('Soldier 李四 without weapon beat NormalPerson 张三', function () {
        var monster_a = new NormalPerson('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);

        var expectText = '战士李四攻击了普通人张三,张三受到了10点伤害,张三剩余生命:10';
        var result = soldier_b.attack(monster_a);

        //expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });

    it('Soldier 李四 with weapon beat NormalPerson 张三', function () {
        var monster_a = new NormalPerson('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);
        soldier_b.set_weapon(new Weapon('优质木棒', 5));

        var expectText = '战士李四用优质木棒攻击了普通人张三,张三受到了15点伤害,张三剩余生命:5';
        var result = soldier_b.attack(monster_a);

        //expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });

    it('Soldier 李四 with weapon beat Soldier 张三 without armor', function () {
        var soldier_a = new Soldier('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);
        soldier_b.set_weapon(new Weapon('优质木棒', 5));

        var expectText = '战士李四用优质木棒攻击了战士张三,张三受到了15点伤害,张三剩余生命:5';
        var result = soldier_b.attack(soldier_a);

        //expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });

    it('Soldier 李四 with weapon beat Soldier 张三 with armor', function () {
        var soldier_a = new Soldier('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);
        soldier_b.set_weapon(new Weapon('优质木棒', 5));
        soldier_a.set_armor(new Armor('防具', 5));

        var expectText = '战士李四用优质木棒攻击了战士张三,张三受到了10点伤害,张三剩余生命:10';
        var result = soldier_b.attack(soldier_a);

        //expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });

    it('Soldier 李四 without weapon beat Soldier 张三 without armor', function () {
        var soldier_a = new Soldier('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);

        var expectText = '战士李四攻击了战士张三,张三受到了10点伤害,张三剩余生命:10';
        var result = soldier_b.attack(soldier_a);

        //expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });

    it('Soldier 李四 without weapon beat Soldier 张三 with armor', function () {
        var soldier_a = new Soldier('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);
        soldier_a.set_armor(new Armor('防具', 5));

        var expectText = '战士李四攻击了战士张三,张三受到了5点伤害,张三剩余生命:15';
        var result = soldier_b.attack(soldier_a);

        //expect(result).toBe(expectText);
        assert.equal(result, expectText);
    });
});