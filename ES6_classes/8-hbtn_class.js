export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // When cast to Number
  valueOf() {
    return this._size;
  }

  // When cast to String
  toString() {
    return this._location;
  }
}