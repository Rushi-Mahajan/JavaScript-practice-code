// Inheritance
class user{
    constructor(username){
        this.username=username;
    }

    logme(){
        return `User name is ${this.username}`
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){
        return `New course added by ${this.username}`
    }
}
// The teacher will  have access to user class - property & methods
// As the super & constructor is used
let teacher1=new teacher("Meya","meya@123.com","1234567890")
console.log(teacher1.addcourse());
console.log(teacher1.logme());

// The user will not have access to teacher class - property & methods
let tea=new user("checked")
// console.log(tea.addcourse())
// will not have the access

console.log(tea.logme())

// instanceof - to check wheather the instances is the copy of the object
// teacher1 instanceof user ==> true
// tea instance of teacher ==> false
console.log(teacher1 instanceof user);


