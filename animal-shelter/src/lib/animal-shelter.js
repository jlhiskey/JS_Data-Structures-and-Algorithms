'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.cat = [];
    this.dog = [];
  }

  enqueue(animal) {
    let counter = 1;
    if (animal.type === 'cat') {
      this.cat.position = counter;
      this.cat.push(animal);
      counter += 1;
      return counter;
    }
    if (animal.type === 'dog') {
      this.dog.position = counter;
      this.dog.push(animal);
      counter += 1;
      return counter;
    }
    return undefined;
  }

  dequeue(animal) {
    let adoptedPet = null;

    if (animal !== 'dog' && animal !== 'cat') {
      if (this.cat[0].position < this.dog[0].position) {
        adoptedPet = this.cat[0]; // eslint-disable-line
        this.cat.shift();
        return adoptedPet;
      }
      adoptedPet = this.dog[0]; // eslint-disable-line
      this.dog.shift();
      return adoptedPet.name;
    }

    if (animal === 'cat') {
      adoptedPet = this.cat[0]; // eslint-disable-line
      this.cat.shift();
      return adoptedPet.name;
    }
    if (animal === 'dog') {
      adoptedPet = this.dog[0]; // eslint-disable-line
      this.dog.shift();
      return adoptedPet.name;
    }
    return undefined;
  }
};
