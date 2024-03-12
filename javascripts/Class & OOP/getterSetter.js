class user{
    constructor(username,pasword){
        this.username=username
        this.pasword=pasword
    }

    get username(){
        return this._username;
    }

    set username(value){
        this._username=value.toUpperCase()
    }

    get password(){
        return this._pasword;
    }

    set pasword(value){
        this._pasword=value.toLowerCase()
    }
}

// let user1=new user("hrushikesh","123456789")
// console.log(user1.password)

//using functional Object

function user2(username,password){
    this._password=password;
    this._username=username

    Object.defineProperty(this,"password",{
        get: function(){
            return this._password
        },
        set: function(value){
            this._password=_password
        }
    })

    Object.defineProperty(this,"username",{
        get: function(){
            return this._username
        },
        set: function(value){
            this._username=_username
        }
    })
}
let u2=new user2("hrushikesh","1234");
console.log(u2.password);
console.log(u2.username);

