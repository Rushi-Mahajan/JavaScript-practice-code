const promiseOne=new Promise(function(resolve,reject){
    // DO async tasks
    // DB calls , cryptography, network
    setTimeout(function(){
        console.log("Promise tasks is completed");
    resolve()
    },1000)
});

promiseOne.then(function(){
    console.log("Resolved");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise tasks 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"hrushikesh", email:"123@gmail.com"})
    },1000)
})

promiseThree.then(function(obj){
    console.log(obj);
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({usname:"hrushikesh",password:"12345678"})
        }else{
            reject("Error: something went worng")
        }
    },1000)
})

user1=promiseFour.then(function(username){
    console.log(username);
    return username.usname
    console.log(name);
}).then(function(name){
    console.log(name);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Finally promise is either resolve or rejected");
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascripts",password:"123456789"})
        }else{
            reject("Something went wrong!")
        }
    },2000)
})

async function consumepromiseFive(){
    try {
        const response=await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromiseFive()

async function getuser(){
    try{
        const response=await fetch("https://api.github.com/users/Rushi-Mahajan")
        const date=await response.json()
        console.log(date.login);
    }
    catch(error){
        console.log(error);
    }
   
}
getuser()

fetch("https://api.github.com/users/Rushi-Mahajan")
.then(function(response){
    return response.json()
}).then((user)=>{
    console.log(user);

})
.catch(function(error){
    console.log(error);
})