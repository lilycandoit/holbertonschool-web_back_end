export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // to customize how the object appears
  get [Symbol.toStringTag]() {
    return this._code;
  }
    
  // to customize string format
  toString() {
    return `[object ${this._code}]`;
  }

}