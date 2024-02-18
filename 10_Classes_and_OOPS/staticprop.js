class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Ashutosh = new User("Ashutosh");
// console.log(Ashutosh.createId());


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}


const val = new Teacher("Iphone", "Iphone@Apple.com");
console.log(val.createId());