export default class Currency {
  constructor(code, name) {
    this.code = code; // use setter
    this.name = name; // use setter
  }

  // code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    // should use getters in stead of backing fields
    return `${this.name} (${this.code})`;

    // the backing fields work too but NOT recommended
    // because it breaks encapsulation and dodges your validation logic.
    // return `${this._name} (${this._code})`;
  }
}
