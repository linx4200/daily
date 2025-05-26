/// <reference path="Animal.ts" />
/// <reference path="Cat.ts" />
/// <reference path="Dog.ts" />

// some animals to test
const strings = ['cat', 'dog', 'pig'];

let animals: { [s: string]: Animal.Mammal } = {};
animals['Cat'] = new Animal.Cat();
animals['Dog'] = new Animal.Dog();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in animals) {
    console.log(
      `"${s}" - ${
        animals[name].isOneOfThem(s) ? "is" : "is not a"
      } ${name}`
    );
  }
}