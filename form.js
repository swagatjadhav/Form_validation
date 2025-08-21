let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

// function validateform(){
//     return false;
// }


function validateform(){
  if(username.value == ""){
     document.getElementById("usererror").innerHTML = "User name is empty";
     flag = 0;
  }else if(username.value.length < 3){
    document.getElementById("usererror").innerHTML = "User name require mini 3 char";
    flag = 0;

  }else{
  document.getElementById("usererror").innerHTML = ""; 
  flag = 1;
  }

  if(password.value == ""){
  document.getElementById("passerror").innerHTML = "password is empty"; 
  flag = 0;

 }else{
  document.getElementById("passerror").innerHTML = ""; 
  flag = 1;

 }

 if(flag){
  return true; //flag = 1
 }else{
  return false; //flag = 0
 }
}




// document.addEventListener("DOMContentLoaded", function(){
// // const form = document.getElementById("form");
// let form = document.querySelector("#form");
//    form.onsubmit = function(){
//      return validateform();
//       };
//     });

//   function validateform(){
//       return false;
//     }