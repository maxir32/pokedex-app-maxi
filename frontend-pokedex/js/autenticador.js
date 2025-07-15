window.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!token || !usuario) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('usuarioNombre').innerText = 'Bienvenido, ' + usuario.nombre;

    if (usuario.rol === 'admin') {
        document.getElementById('seccionAdmin').style.display = 'block';
    }
});

function cerrarSesion() {
    localStorage.clear();
    window.location.href = 'login.html';
}
