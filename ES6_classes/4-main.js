import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.amount);
console.log(p.currency);
console.log(p.displayFullPrice());
// static method need to be called on th class, not the instance
console.log(Pricing.convertPrice(100, 0.8));
