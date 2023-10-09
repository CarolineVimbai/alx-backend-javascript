export default class Currency {
  constructor(code, name) {
    // create objs
    this._code = code;
    this._name = name;
  }

  // methods

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

  // setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._name = newCode;
  }

  // Ggtters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}
