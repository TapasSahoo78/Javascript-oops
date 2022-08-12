function Employee(first, last) {
    this.first = first;
    this.last = last;
}


Employee.prototype.fullName = function () {
    return this.first + " " + this.last;
}

const employee = new Employee('Tapas', 'Sahoo');
console.log(employee.fullName());

// Output :
// Tapas Sahoo