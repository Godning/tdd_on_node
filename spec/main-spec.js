
var assert = require("assert");

require('../src/monster.js');
require('../src/soldier.js');
require('../src/weapon.js');
require('../src/armor.js');
require('../src/main.js')

describe('TDD', function () {

    beforeEach(function () {

    });

    it('given 2 monster 张三 and 李四 which are same life and aggressivity then 张三 attack first then 张三获胜', function () {
        var log_result = []

        function log(s) {
            log_result.push(s)
        }

        var monster_a = new NormalPerson('张三', 10, 10);
        var monster_b = new NormalPerson('李四', 10, 5);
        var expectText = '张三获胜';
        fighting(monster_a, monster_b, log);

        //expect(log_result.slice(-1)[0]).toBe(expectText);
        assert.equal(log_result.slice(-1)[0], expectText);
    });

    it('given 2 monster 张三 and 李四 which are same life and aggressivity then 李四 attack first then 李四获胜', function () {
        var log_result = [];

        function log(s) {
            log_result.push(s)
        }

        var monster_a = new NormalPerson('张三', 10, 10);
        var monster_b = new NormalPerson('李四', 10, 10);
        var expectText = '李四获胜';
        fighting(monster_b, monster_a, log);

        //expect(log_result.slice(-1)[0]).toBe(expectText);
        assert.equal(log_result.slice(-1)[0], expectText);
    });
    it('李四 beat 张三 once and win, output 李四\'s every action', function () {
        var log_result = []

        function log(s) {
            log_result.push(s)
        }

        var times = 0;
        var monster_a = {name: '张三', life: 10};
        var monster_b = {name: '李四', life: 10};
        monster_a.attack = function (another) {
            return 'xxx';
        };
        monster_a.is_alive = function () {
            return times++ < 1;
        };
        monster_b.attack = function (another) {
            another.life = 0;
            return 'b.attack';
        };
        monster_b.is_alive = function () {
            return true;
        };
        var expectText = ['b.attack', '李四获胜'];
        fighting(monster_b, monster_a, log);

        //expect(log_result.join()).toBe(expectText.join())
        assert.equal(log_result.join(), expectText.join());
    });
    it('李四 beat 张三 twice and win, output every action', function () {
        var log_result = [];

        function log(s) {
            log_result.push(s);
        }

        var times = 0;
        var monster_a = {name: '张三', life: 20};
        var monster_b = {name: '李四', life: 20};
        monster_a.attack = function (another) {
            return '张三.attack';
        };
        monster_a.is_alive = function () {
            return times++ < 3;
        };
        monster_b.attack = function (another) {
            return '李四.attack';
        };
        monster_b.is_alive = function () {
            return true;
        }
        var expectText = ['李四.attack', '张三.attack', '李四.attack', '李四获胜'];
        fighting(monster_b, monster_a, log);

        //expect(log_result.join()).toBe(expectText.join())
        assert.equal(log_result.join(), expectText.join());
    });
});

