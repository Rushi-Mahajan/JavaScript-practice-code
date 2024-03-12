class user{
    constructor(username){
        this.username=username
    }

    logme(){
        return `The user name is ${this.username}`
    }

    // some private method - that cannot be access by the user's instance we have to use static
    static createId(){
        return `123`
    }
}

let user1=new user("hrushikesh")
// since its an static method it cannot be access
// console.log(user1.createId())


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

let iphone= new teacher("hrusikesh","123455","12@gmail.com")
console.log(iphone.logme())
// since its an static method it cannot be access
// console.log(iphone.createId())

