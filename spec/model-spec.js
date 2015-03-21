/**
 * Created by hackeris on 3/14/2015.
 */

describe('Test of models', function () {

    it('Monster 李四 beat Monster 张三', function () {
        var monster_a = new Monster('张三', 10, 20);
        var monster_b = new Monster('李四', 10, 20);

        var expectText = '普通人李四攻击了普通人张三,张三受到了10点伤害,张三剩余生命:10';
        var result = monster_b.attack(monster_a);

        expect(result).toBe(expectText);
    });

    it('Monster 李四 beat Soldier 张三 without shield', function () {
        var monster_a = new Monster('李四', 10, 20);
        var solider_b = new Soldier('张三', 10, 20);

        var expectText = '普通人李四攻击了战士张三,张三受到了10点伤害,张三剩余生命:10';
        var result = monster_a.attack(solider_b);

        expect(result).toBe(expectText);
    });

    it('Monster 李四 beat Soldier 张三 with shield', function () {
        var monster_a = new Monster('李四', 10, 20);
        var solider_b = new Soldier('张三', 10, 20);
        solider_b.set_shield(new Shield('防具', 5));

        var expectText = '普通人李四攻击了战士张三,张三受到了5点伤害,张三剩余生命:15';
        var result = monster_a.attack(solider_b);

        expect(result).toBe(expectText);
    });

    it('Soldier 李四 without weapon beat Monster 张三', function () {
        var monster_a = new Monster('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);

        var expectText = '战士李四攻击了普通人张三,张三受到了10点伤害,张三剩余生命:10';
        var result = soldier_b.attack(monster_a);

        expect(result).toBe(expectText);
    });

    it('Soldier 李四 with weapon beat Monster 张三', function () {
        var monster_a = new Monster('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);
        soldier_b.set_weapon(new Weapon('优质木棒', 5));

        var expectText = '战士李四用优质木棒攻击了普通人张三,张三受到了15点伤害,张三剩余生命:5';
        var result = soldier_b.attack(monster_a);

        expect(result).toBe(expectText);
    });

    it('Soldier 李四 with weapon beat Soldier 张三 without shield', function () {
        var soldier_a = new Soldier('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);
        soldier_b.set_weapon(new Weapon('优质木棒', 5));

        var expectText = '战士李四用优质木棒攻击了战士张三,张三受到了15点伤害,张三剩余生命:5';
        var result = soldier_b.attack(soldier_a);

        expect(result).toBe(expectText);
    });

    it('Soldier 李四 with weapon beat Soldier 张三 with shield', function () {
        var soldier_a = new Soldier('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);
        soldier_b.set_weapon(new Weapon('优质木棒', 5));
        soldier_a.set_shield(new Shield('防具', 5));

        var expectText = '战士李四用优质木棒攻击了战士张三,张三受到了10点伤害,张三剩余生命:10';
        var result = soldier_b.attack(soldier_a);

        expect(result).toBe(expectText);
    });

    it('Soldier 李四 without weapon beat Soldier 张三 without shield', function () {
        var soldier_a = new Soldier('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);

        var expectText = '战士李四攻击了战士张三,张三受到了10点伤害,张三剩余生命:10';
        var result = soldier_b.attack(soldier_a);

        expect(result).toBe(expectText);
    });

    it('Soldier 李四 without weapon beat Soldier 张三 with shield', function () {
        var soldier_a = new Soldier('张三', 10, 20);
        var soldier_b = new Soldier('李四', 10, 20);
        soldier_a.set_shield(new Shield('防具', 5));

        var expectText = '战士李四攻击了战士张三,张三受到了5点伤害,张三剩余生命:15';
        var result = soldier_b.attack(soldier_a);

        expect(result).toBe(expectText);
    });
});