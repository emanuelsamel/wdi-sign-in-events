document.addEventListener('DOMContentLoaded', function(){

  var signIn = document.querySelector('.signin')
  var modal = document.querySelector('.modal')
  var button = document.querySelector('.close')




  signIn.addEventListener('click', function(e){
    e.preventDefault();
    modal.style.display = 'block'
  })

  button.addEventListener('click', function(e){
    e.preventDefault();
      modal.style.display = 'none'
  });
})
