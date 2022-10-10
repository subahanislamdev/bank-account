document.getElementById('btn-submit').addEventListener('click',function(){
  var usermail = document.getElementById('email-field')
  var email = usermail.value
  var userpassword = document.getElementById('password-field')
  var password = userpassword.value
if(email == 'lanju@gmail.com' && password == 'bolod'){
    // how to javascript file go to html file 
    window.location.href='account.html';
}else{
   alert('i am seriously bukachuda')
}
  
})