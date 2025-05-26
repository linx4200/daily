/// <reference path="Animal.ts" />
var Animal;
(function (Animal) {
    var type = 'Cat';
    var Cat = /** @class */ (function () {
        function Cat() {
        }
        Cat.prototype.isOneOfThem = function (s) {
            return s === type.toLocaleLowerCase();
        };
        return Cat;
    }());
    Animal.Cat = Cat;
})(Animal || (Animal = {}));
/// <reference path="Animal.ts" />
var Animal;
(function (Animal) {
    var type = 'Dog';
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.isOneOfThem = function (s) {
            return s === type.toLocaleLowerCase();
        };
        return Dog;
    }());
    Animal.Dog = Dog;
})(Animal || (Animal = {}));
/// <reference path="Animal.ts" />
/// <reference path="Cat.ts" />
/// <reference path="Dog.ts" />
// some animals to test
var strings = ['cat', 'dog', 'pig'];
var animals = {};
animals['Cat'] = new Animal.Cat();
animals['Dog'] = new Animal.Dog();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in animals) {
        console.log("\"".concat(s, "\" - ").concat(animals[name_1].isOneOfThem(s) ? "is" : "is not a", " ").concat(name_1));
    }
}
