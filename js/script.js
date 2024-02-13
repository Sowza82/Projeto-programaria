document.getElementById("formulario").addEventListener("submit", function(event) {
  
    event.preventDefault();
  
    
    validaFormulario();
  });
  
  function validaFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
  
    if (nome.trim() !== "" && email.trim() !== "" && telefone.trim() !== "") {
      alert("Prontinho! Você receberá as novidades por email.");
    } else {
      alert("Por favor, preencha todos os campos: Nome, Email e Telefone.");
    }
  }