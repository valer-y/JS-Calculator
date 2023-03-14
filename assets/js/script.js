"use strict";

/* 1. Make exceptions */
/* 1.1. Double dot in one number */
/* 1.2. Double operation symbol input */
/* 1.3. Zero division */

/* 2. Math operators creating */

/* 3. Float numbers-operations round */

/* 4. +/- functionality */



// Command
class Calculator {
    constructor() {
        this.value = 0;
        // Command operations
        this.operations = [];
    }

    execute(operation) {
        this.value = operation.execute(this.value);
        this.operations.push(this.value);
    }

    undoCommand() {
        this.operations = this.operations.slice(0, -1);
        return this.operations.pop();
    }
}

// Concrete function
class Add {
    constructor(arg) {
        this.arg = arg;
    }

    execute(value) {
        return value + this.arg;
    }
}

// Addition
const calc = new Calculator();
//eslint-disable-next-line no-unused-vars
let test = calc.execute(new Add(15));
console.log(calc.value, ' ', calc.operations);

// Undo Addition
//eslint-disable-next-line no-unused-vars
let testUndo = calc.execute(new Add(25));
console.log(calc.value, ' ', calc.operations);
console.log('History', calc.undoCommand());


const z = new Calculator();


console.log('======================');


class Operations {
    constructor(value = 0) {
        this.value = value;
    }

    add(arg) {
        this.value = this.value + arg;
        return this.value;
    }

}

class Calc extends Operations {
    constructor(subject) {
        super();
        this.subject = subject;
    }

}

let x = new Calc();
console.log(x.add(2));
console.log(x.add(2));

console.log('=====================');



