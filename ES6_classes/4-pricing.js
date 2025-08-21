import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount; // use setter for validation
        this.currency = currency;
    }

    // amount
    get amount() {
        return this._amount;
    }

    set amount(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        this._amount = value;
    }

    // currency
    get currency() {
        return this._currency;
    }

    set currency(value) {
        if (!(value instanceof Currency)) {
            throw new TypeError('Currency must be an instance of Currency');
        }
        this._currency = value
    }

    // instance method
    displayFullPrice() {
        return `${this.amount} ${this.currency.displayFullCurrency()}`;
    }

    // static method - canbe called directly on the class,
    // without creating an instance
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
          throw new TypeError('Both amount and conversionRate must be numbers');
        }
        return amount * conversionRate;
    }
}