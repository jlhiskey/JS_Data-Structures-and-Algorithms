'use strict';

const AnimalShelter = require('../lib/animal-shelter');
const Animal = require('../lib/animal');

const animalShelter = new AnimalShelter();

const animal1 = new Animal();
animal1.type = 'dog';
animal1.name = 'Harley';
const animal2 = new Animal();
animal2.type = 'dog';
animal2.name = 'Sophie';
const animal3 = new Animal();
animal3.type = 'dog';
animal3.name = 'Mickey';
const animal4 = new Animal();
animal4.type = 'cat';
animal4.name = 'BAMF';
const animal5 = new Animal();
animal5.type = 'cat';
animal5.name = 'Matt Damon';


describe('testing to see if animal-shelter.js is working', () => {
  test('testing to see if the correct cat is adopted', () => {
    animalShelter.abandon(animal1);
    animalShelter.abandon(animal2);
    animalShelter.abandon(animal3);
    animalShelter.abandon(animal4);
    animalShelter.abandon(animal5);
    expect(animalShelter.adopt('cat')).toEqual('BAMF');
  });

  test('testing to see if multiple dequeues using animal.type will show proper animal', () => {
    animalShelter.abandon(animal1);
    animalShelter.abandon(animal2);
    animalShelter.abandon(animal3);
    animalShelter.abandon(animal4);
    animalShelter.abandon(animal5);
    expect(animalShelter.adopt('dog')).toEqual('Harley');
    expect(animalShelter.adopt('dog')).toEqual('Sophie');
    expect(animalShelter.adopt('cat')).toEqual('Matt Damon');
  });

  test('testing to see if the counter variable works when trying to just adopt a animal', () => {
    animalShelter.abandon(animal1);
    animalShelter.abandon(animal2);
    animalShelter.abandon(animal3);
    animalShelter.abandon(animal4);
    animalShelter.abandon(animal5);
    expect(animalShelter.adopt()).toEqual('Mickey');
  });
});
