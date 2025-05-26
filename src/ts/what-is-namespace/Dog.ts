/// <reference path="Animal.ts" />

namespace Animal {
  const type = 'Dog';
  export class Dog implements Mammal {
    isOneOfThem(s: string): boolean {
      return s === type.toLocaleLowerCase();
    }
  }
}