// A class can be defined by using a class declaration. A class keyword is used to declare a class with any particular name. According to JavaScript naming conventions, the name of the class always starts with an uppercase letter.

class Employee {
    //Initializing an object  
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        console.log(`My Age is: ${this.id}`);
    }
    getName() {
        console.log(`My Name is: ${this.name}`);
    }
}

console.log(new Employee(1, 'Tapas')); // Employee { id: 1, name: 'Tapas' }

//passing object to a variable   
const employee = new Employee(2, 'Amit');
console.log(employee);
employee.getId();
employee.getName();

// Output :
// Employee { id: 2, name: 'Amit' }
// My Age is: 2
// My Name is: Tapas
