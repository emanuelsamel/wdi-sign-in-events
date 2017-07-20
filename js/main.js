document.addEventListener('DOMContentLoaded', function(){

  var signIn = document.querySelector('.signin')
  var modal = document.querySelector('.modal')
  var button = document.querySelector('.close')
  var submit = document.querySelector('.submit')
  var error = document.getElementById('user')
  var error2 = document.getElementById('pass')



  signIn.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'block'
  })

  button.addEventListener('click', function(e){
    e.preventDefault();
      modal.style.display = 'none'
  })
  submit.addEventListener('click',function(e){
    e.preventDefault();
    error.classList.add("error");
    error2.classList.add("error");
  })
})
