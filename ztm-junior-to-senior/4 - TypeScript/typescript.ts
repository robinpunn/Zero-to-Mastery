const sum = (a : number, b : number) => {
    return a + b;
}

const answer = sum(4,5)

console.log(answer)

//boolean
let isCool : boolean = true;

//number
let age : number = 56;

//string
let eyeColor : string = 'brown';
let quote: string = `I'm not old, I'm only ${age}`;

//Array
let pets : string[] = ['cat', 'dog', 'pig'];
let pets2 : Array<string> = ['lion', 'dragon', 'lizard'];

//Object
let wizard: object = {
    a: 'John'
}

//null and undefined
let meh: undefined = undefined;
let noo: null = null;

//Tuple
let basket: [string, number];
basket = ['basketball', 5];

//Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];
let sizeName2: number = Size.Small;

//Any - !!!!!!!!!! Be careful
let whatever: any = 'aghhhhhh noooooo!';
whatever = 5;

//void
let sing = (): void => {
    console.log('lalalala')
    //return 'lalalala' //error
}

//never
let error = (): never => {
    throw Error('ooops');
}

//interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

//interface type alias
type CatArmy = {
    count: number,
    type: string,
    magic: string
}

// let dog = {}
// dog.count; //error Property 'count' does not exist on type '{}'

//Type Assertion
interface DogArmy {
    count: number,
    type: string,
    magic: string
}

let cat = {} as DogArmy;
cat.count;

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!')
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT!')
}

//Type Assertion
interface BarkArmy {
    count: number,
    type: string,
    magic?: string
}

//function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('FIGHT!')
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('FIGHT!')
    return 5;
}


//class
class Animal {
    sing: string = 'lalala';
    constructor(sound: string) {
        this.sing = sound;
    }
    greet(){
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAAAAWR');
lion.greet();

//Union
let confused: string | number | boolean = 'hello';

//Type Inference
let x = 4;
//x = 'hello'; //error