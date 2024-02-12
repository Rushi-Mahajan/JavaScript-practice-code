// Immediately Invoked Function Expression


(function chai(){
    // Named IIFE
    console.log(`Hello`);
}());
// ;  -> if there number of IIFE, then will need to mention at end of IIFE(;) as javascripts have invoke the functions, but don't know where to stop the current context

// Due to Global scope few problems occur that's why IIFE is used.
//IIFE is use to aviod Gobal scope/variable pollutions


((name)=>{
    // Unamed IIFE
    console.log(`DB conncted ${name}`)
})("Studentdb");
