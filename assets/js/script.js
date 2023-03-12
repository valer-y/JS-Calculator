"use strict";

/* 1. Make exceptions */
/* 1.1. Double dot in one number */
/* 1.2. Double operation symbol input */
/* 1.3. Zero division */

/* 2. Math operators creating */

/* 3. Float numbers-operations round */

/* 4. +/- functionality */

class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];
    }

    executeCommand(command) {
        this.value = command.execute(this.value);
        this.history.push(this.value);
    }

    undoCommand() {
        this.history = this.history.slice(0, -1);
        return this.history.pop();
    }
}

class Add {
    constructor(addValue) {
        this.addValue = addValue;
    }

    execute(currentValue) {
        return currentValue + this.addValue;
    }
}

// Addition
const calc = new Calculator();
//eslint-disable-next-line no-unused-vars
let test = calc.executeCommand(new Add(15));
console.log(calc.value, ' ', calc.history);

// Undo Addition
//eslint-disable-next-line no-unused-vars
let testUndo = calc.executeCommand(new Add(25));
console.log(calc.value, ' ', calc.history);
console.log('History', calc.undoCommand());
