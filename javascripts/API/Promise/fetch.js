fetch("https://api.github.com/users/Rushi-Mahajan")
.then(function(response){
    return response.json()
}).then((user)=>{
    console.log(user);

})
.catch(function(error){
    console.log(error);
})