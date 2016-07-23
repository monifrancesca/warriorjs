class Player {
  constructor() {
    // This code will be executed only once, at the beginning of the level
    this._health = 20;
  }

  playTurn(warrior) {
    if (warrior.feel().isEmpty() && warrior.health() < 20) {
      warrior.rest();
    } else {
      warrior.attack();
    }
  }
}
