class Auth {
    constructor() {
        // this.name = name;
        // this.pass = pass;
        var name;
        var pass;
    }
    register(name, pass) {
        this.name = name;
        this.pass = pass;
    }
    login() {
        //console.log(this.name,this.pass)
        if (this.name == 'tapas' && this.pass == 'password') {
            console.log('Login Successfully');
        } else {
            console.log('Please check username and password');
        }
    }
}

const auth = new Auth();

auth.register('tapas', 'password');

auth.login();