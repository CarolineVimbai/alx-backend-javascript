import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // call constructor of super class (Building)
    super(sqft);

    // create objs
    this._floors = floors;
  }

  // methods

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // setters

  // getters
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }
}
