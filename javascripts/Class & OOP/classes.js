// after ES6
class User{
    constructor(username,password,email){
        this.username=username
        this.password=password
        this.email=email
    }

    displayUsername(){
        return `The User is ${this.username}`
    }

    displayEmail(){
        return `The User is ${this.email}`    
    }
}

let Rushi=new User("Hrushikesh","1234567890","123@gmail.com")
// console.log(Rushi.displayUsername())
// console.log(Rushi.displayEmail())


// Behind the scence in JS, if class sytnax was not there.

function user1(username,password,email){
    this.username=username
    this.password=password
    this.email=email
}

user1.prototype.displayUsername= function () {
    return `The User is ${this.username}`
}

user1.prototype.displayEmail= function () {
    return `The User is ${this.email}`    
}

let hrushi=new user1("hrushikesh Mahajan","1234098765","Q@gmail.com")
console.log(hrushi.displayEmail())
console.log(hrushi.displayUsername())
