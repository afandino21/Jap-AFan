const loginForm = document.getElementById("loginForm");
const emailGuardado = localStorage.getItem('email');
if (emailGuardado !== null){
  document.getElementById('email').value = emailGuardado;
}

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulando una verificación en el lado del servidor
  if ((/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g).test(password)) {
    // Almacenar el estado de inicio de sesión en sessionStorage
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("email", email);
    
    // Redirigir al usuario a la página de inicio
    window.location.href = "Agendarse.html";
  }else{alert('contraseña invalida, la contraseña requiere:\n-Al menos 8 Caracteres\n-Al menos un símbolo\n-Al menos un número\n-Al menos una letra')};
});

