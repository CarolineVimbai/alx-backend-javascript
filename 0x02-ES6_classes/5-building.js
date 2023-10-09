export default class Building {
  constructor(sqft) {
    // any class extending Building must implement below method
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('Class extending Building must override evacuationWarningMessage');

    // create objs
    this._sqft = sqft;
  }

  // methods

  // setters

  // getters
  get sqft() {
    return this._sqft;
  }
}
