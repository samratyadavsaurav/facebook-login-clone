const loginBox = document.getElementById('loginBox');
const signUpBox = document.getElementById('signUpBox');
const resetBox = document.getElementById('resetBox');



document.getElementById("createNew_btn").addEventListener('click',()=>{
  loginBox.classList.add("hidden");
  signUpBox.classList.remove("hidden");
});

document.getElementById("forgot_btn").addEventListener('click',()=>{
  loginBox.classList.add("hidden");
  resetBox.classList.remove("hidden");
});



