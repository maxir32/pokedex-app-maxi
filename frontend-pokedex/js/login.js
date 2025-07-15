document.getElementById('formLogin').addEventListener('submit', async function(evento) {
    evento.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const respuesta = await fetch('http://localhost:3000/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const datos = await respuesta.json();
    if (respuesta.ok) {
        localStorage.setItem('token', datos.token);
        localStorage.setItem('usuario', JSON.stringify(datos.usuario));
        window.location.href = 'index.html';
    } else {
        document.getElementById('mensajeError').innerText = datos.mensaje || 'Error al iniciar sesión';
    }
});
