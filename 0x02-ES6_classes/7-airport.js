export default class Airport {
  constructor(name, code) {
    // create objs
    this._code = code;
    this._name = name;
  }

  // methods

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  // setters

  // getters
}
