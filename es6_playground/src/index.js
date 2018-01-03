// inheritance
class Pet {
  // TODO common things
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  // method
  intro() {
    console.log('My name is ' + this.name + " I'm a " + this.breed);
  }
}

class Cat extends Pet {
  meow() {
    console.log(this.name + ': meow');
  }
}

class Dog extends Pet {

}
let dog1 = new Dog('Max', 'Bulldog');
let dog2 = new Dog('Bella', 'Poodle');
let cat1 = new Cat('Cathy', 'Persian cat');

dog1.intro();
dog2.intro();
cat1.intro();
cat1.meow();