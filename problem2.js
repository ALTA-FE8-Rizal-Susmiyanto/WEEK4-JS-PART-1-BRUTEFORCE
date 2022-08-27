let pecahan = [1000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

function moneyChanger(money, coint ) {
    
    if (money == 0 ) return [];
    else {
        if(money >= coint) {
            left = money - coint;
            return [coint].concat(moneyChanger(left, coint));

        } else {
            coint.shift();
            return moneyChanger(money, coint)
        }
    }
}


console.log(moneyChanger(42, [pecahan])) // [100 20 1 1 1]
