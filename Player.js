class Player {
  // constructor() {
  //   // This code will be executed only once, at the beginning of the level
  //   this._health = 20;
  // }

  playTurn(warrior) {
    //if health is less than 20 rest
    if (warrior.feel().isEmpty() && warrior.health() < 20) {
      warrior.rest();

      //when health is at 20 walk
    } else if (warrior.feel().isEmpty() && warrior.health() == 20) {
      warrior.walk();
    } else {
      warrior.attack();
    }
  }
}
