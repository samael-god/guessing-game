class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.try = Math.ceil(((this.max + this.min) / 2));
        return this.try;
    }

    lower() {
        this.max = this.try;
    }

    greater() {
        this.min = this.try;
    }
}

module.exports = GuessingGame;
