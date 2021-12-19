class Wallet {
    constructor(money) {
        let _money = money;
        //taking actual amount of money
        this.getWalletValue = () => _money;

        //checking if player has enough money
        this.checkCanPlay = value => {
            if (money >= value) return true;
            return false;
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Bad type of execute");
                }
            } else {
                console.log(typeof value);
            }
        }
    }

}

