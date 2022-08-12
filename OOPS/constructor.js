class MyCompany {
    constructor() {
        this.companyName = 'TPS Technology';
    }
}

class Employee extends MyCompany {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }
}

const employee = new Employee(1, 'Tapas');
console.log(employee);


// Output :
// Employee { companyName: 'TPS Technology', id: 1, name: 'Tapas' }