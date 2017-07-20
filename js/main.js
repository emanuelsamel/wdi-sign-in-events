document.addEventListener('DOMContentLoaded', function(){

  var signIn = document.querySelector('.signin')
  var modal = document.querySelector('.modal')


  signIn.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'block'
  })
})
