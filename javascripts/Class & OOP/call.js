function setuserName(username){
    // Complex DB calls
    this.username=username
    // console.log("calls");
}

function createuserName(username,passoword,email){
    // to hold the reference - Call is used
    setuserName.call(this,username)
    this.passoword=passoword
    this.email=email
}

let rushi=new createuserName("hrushikesh","123456789","123gamil.com")
console.log(rushi)