var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
//boolean
var isCool = true;
//number
var age = 56;
//string
var eyeColor = 'brown';
var quote = "I'm not old, I'm only ".concat(age);
//Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
//Object
var wizard = {
    a: 'John'
};
//null and undefined
var meh = undefined;
var noo = null;
//Tuple
var basket;
basket = ['basketball', 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeName2 = Size.Small;
//Any - !!!!!!!!!! Be careful
var whatever = 'aghhhhhh noooooo!';
whatever = 5;
//void
var sing = function () {
    console.log('lalalala');
    //return 'lalalala' //error
};
//never
var error = function () {
    throw Error('ooops');
};
var cat = {};
cat.count;
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
//function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
//class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('RAAAAWR');
lion.greet();
//Union
var confused = 'hello';
//Type Inference
var x = 4;
//x = 'hello'; //error
