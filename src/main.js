//TODO: Please write code in this file.

function fighting(x, y, l) {
    var flag = true;
    while (x.is_alive() && y.is_alive()) {
        if (flag) {
            l(x.attack(y));
        } else {
            l(y.attack(x));
        }
        flag = !flag;
    }
    if (!x.is_alive()) {
        l(y.name + '获胜');
    } else if (!y.is_alive()) {
        l(x.name + '获胜');
    }
}