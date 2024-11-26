function validarFormulario() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const usuarioCorrecto = 'eynar';
    const contraseñaCorrecta = '12345';

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        window.location.href = "index.html";  // Redirección manual
        return false;  // Previene el envío del formulario (si lo deseas)
    } else {
        alert('Usuario o contraseña incorrectos.');
        return false;  // Previene el envío del formulario
    }
}

