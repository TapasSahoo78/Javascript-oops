// The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it.
// Use var keyword to make data members private.
// Use setter methods to set the data and getter methods to get that data.

class Student {
    constructor() {
        var name;
        var marks;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        this.marks = marks;
    }
}

const std = new Student();
std.setName('Tapas');
std.setMarks(90);
console.log(`${std.getName()}`);