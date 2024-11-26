function validarFormulario() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const usuarioCorrecto = 'eynar';
    const contraseñaCorrecta = '12345';

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        window.location.href = "principio.html";
        return false;  
    } else {
        alert('Usuario o contraseña incorrectos.');
        return false;  
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(verificaForm) {
    verificaForm.preventDefault();
    const name = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mensaje').value;
    if (name === "") {
    alert("Por favor ingrese su nombre");
    return; 
    }
    if (email === "") {
    alert("Por favor ingrese su correo electrónico");
    return; 
    }
    if (message === "") {
    alert("Por favor ingrese su mensaje");
    return; 
    }
    alert("Se ha enviado sus datos al sistema!");
    form.reset();
    });
});