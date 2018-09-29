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
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    animalShelter.enqueue(animal3);
    animalShelter.enqueue(animal4);
    animalShelter.enqueue(animal5);
    expect(animalShelter.dequeue('cat')).toEqual('BAMF');
  });

  test('testing to see if multiple dequeues using animal.type will show proper animal', () => {
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    animalShelter.enqueue(animal3);
    animalShelter.enqueue(animal4);
    animalShelter.enqueue(animal5);
    expect(animalShelter.dequeue('dog')).toEqual('Harley');
    expect(animalShelter.dequeue('dog')).toEqual('Sophie');
    expect(animalShelter.dequeue('cat')).toEqual('Matt Damon');
  });

  test('testing to see if the counter variable works when trying to just adopt a animal', () => {
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    animalShelter.enqueue(animal3);
    animalShelter.enqueue(animal4);
    animalShelter.enqueue(animal5);
    expect(animalShelter.dequeue()).toEqual('Mickey');
  });
});
