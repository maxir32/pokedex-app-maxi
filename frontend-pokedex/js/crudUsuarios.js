async function cargarUsuarios() {
    const token = localStorage.getItem('token');
    const lista = document.getElementById('listaUsuarios');
    lista.innerHTML = '';

    const res = await fetch('http://localhost:3000/api/usuarios', {
        headers: { 'Authorization': 'Bearer ' + token }
    });

    const usuarios = await res.json();
    usuarios.forEach(u => {
        const item = document.createElement('li');
        item.innerText = `${u.nombre} - ${u.email} - ${u.rol}`;
        lista.appendChild(item);
    });
}
