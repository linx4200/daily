// 解决 Cannot augment module 'Animal' with value exports because it resolves to a non-module entity.
export {}; // 👈 关键的一行

declare const foo: string;

// https://www.typescriptlang.org/docs/handbook/enums.html#ambient-enums
// Ambient enums are used to describe the shape of already existing enum types.
declare enum Shapes {
  Rectangle
}
declare namespace Animal {
  export class Cat {
    name: string;
  }
}
declare function test1(name: string): boolean;
declare class Cat {
  constructor(name: string);
  breed: string;
}

// declare interface
// declare typeA 有什么意义？
declare type TypeA = string;

// declare module (❌)

// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation
// declare global

// declare export
// declare import

