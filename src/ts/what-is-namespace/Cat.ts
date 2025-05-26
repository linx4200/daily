/// <reference path="Animal.ts" />

namespace Animal {
  const type = 'Cat';
  export class Cat implements Mammal {
    isOneOfThem(s: string): boolean {
      return s === type.toLocaleLowerCase();
    }
  }
}