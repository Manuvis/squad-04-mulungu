var stars = document.querySelectorAll('.star-icon');
                  
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});

function validateForm() {
  var senha = document.getElementById('senha').value;
  var confirm_senha = document.getElementById('confirm_senha').value;

  if (senha !== confirm_senha) {
      alert('As senhas não coincidem. Por favor, insira senhas iguais.');
      return false; 
  }

  return true; 
}