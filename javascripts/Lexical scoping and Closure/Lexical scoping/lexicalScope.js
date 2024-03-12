// Parent function variable can be access by child functions
// But child function cannot be access by parent
// In below example Parent is outer function & Child is innerfunction

function outer(){
    let message="Hello world"
    function inner(){
        // due to lexical scope, this inner functions have access to outer functions 
        let name="call"
        console.log(message);
        
    }
    // In outer function, name access will not be there.
    // console.log(name);
    inner()
}
outer()