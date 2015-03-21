# tdd_on_node

### 第四问 第一部

* 武器有特性，产生各种效果：
* 毒性伤害，每轮损血，属于延时伤害
* 火焰伤害，每轮损血，属于延时伤害
* 冰冻伤害，每两轮无法攻击一轮，属于延时伤害
* 击晕伤害，两轮无法攻击，属于延时伤害
* 全力一击，三倍伤害，是伤害乘以3，不是攻击力。
* 有的武器有特性，有的武器没有，一个武器只有一个特性

* 效果触发是随机的。不同的武器有不同的触发几率。
* 发动时要打印受了xx伤害
* 延时伤害结算在每局受到延时伤害的人攻击前，发动时打印伤害。
* 延时伤害都有伤害效果发动的次数，不同的武器造成的伤害发动的次数不同，次数归零就不再伤害，状态也会消失。除了眩晕伤害之外，其他的不显示还剩几轮。
* 每种延时伤害都可以跟自己累加，一个人中了两次同一种延时伤害，其效果会累加发动次数。
* 第三问的需求依然有效。

例子：（注：下面的//只是示意，实际要求跟正常的攻击输出一样。）

输出1（毒性）:

    战士张三用优质毒剑攻击了普通人李四,李四受到了8点伤害,李四中毒了,李四剩余生命：12
    李四受到2点毒性伤害, 李四剩余生命：10
    //李四进攻
    //张三进攻
    李四受到2点毒性伤害, 李四剩余生命：x
    //李四进攻

输出2（冰冻）： 

    战士张三用火焰剑攻击了普通人李四,李四受到了8点伤害,李四着火了,李四剩余生命：12
    李四受到2点火焰伤害, 李四剩余生命：10
    //李四进攻
    //张三进攻
    李四受到2点火焰伤害, 李四剩余生命：x
    //李四进攻


输出3（冰冻）：

    战士张三用寒冰剑攻击了普通人李四,李四受到了8点伤害,李四冻僵了,李四剩余生命：12
    //李四进攻
    //张三进攻
    //李四进攻
    //张三进攻
    李四冻得直哆嗦，没有击中张三
    //张三进攻

输出4（眩晕）：

    战士张三用晕锤攻击了普通人李四,李四受到了8点伤害,李四晕倒了,李四剩余生命：12
    李四晕倒了，无法攻击, 眩晕还剩：1轮
    //张三进攻
    李四晕倒了，无法攻击, 眩晕还剩：0轮
    //张三进攻
    //李四进攻

输出5（全力）：

    战士张三用利剑攻击了普通人李四,张三发动了全力一击,李四受到了24点伤害,李四剩余生命：-4


输出6（累加）： 
    
    战士张三用晕锤攻击了普通人李四,李四受到了8点伤害,李四晕倒了,李四剩余生命：12
    李四晕倒了，无法攻击, 眩晕还剩：1轮
    战士张三用晕锤攻击了普通人李四,李四受到了8点伤害,李四晕倒了,李四剩余生命：4
    李四晕倒了，无法攻击, 眩晕还剩：2轮
    //张三进攻
    李四晕倒了，无法攻击, 眩晕还剩：1轮
    //张三进攻
    李四晕倒了，无法攻击, 眩晕还剩：0轮
    //张三进攻
    //李四进攻
