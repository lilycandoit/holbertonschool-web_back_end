export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  // used to create derived objects.
  static get [Symbol.species]() {
    return this; // return the current class/ subclass
  }

  // allow to create new instance of the same class
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}