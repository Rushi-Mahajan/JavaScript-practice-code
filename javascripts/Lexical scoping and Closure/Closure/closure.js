function outer(){
    let message="hello world"
    function inner(){
        console.log(message);
    }
    // its not only returning reference of inner function but its returning lexical scope of it.
    return inner
}

// here its function is assign to let.then only closure is exceuted
let out=outer()
out()