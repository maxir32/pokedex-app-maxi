window.addEventListener('DOMContentLoaded', () => {
    cargarPokedex();
});

async function cargarPokedex() {
    const contenedor = document.getElementById('contenedorPokedex');
    for (let i = 1; i <= 20; i++) {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
        const data = await res.json();

        const tarjeta = document.createElement('div');
        tarjeta.innerHTML = `
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
            <p><strong>Habilidades:</strong> ${data.abilities.map(a => a.ability.name).join(', ')}</p>
        `;
        contenedor.appendChild(tarjeta);
    }
}
