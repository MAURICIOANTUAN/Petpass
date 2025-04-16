function generarNavbar(paginaActual) {
    const navbar = `
      <div class="navbar">
        <a href="panel_paseador.html" class="${paginaActual === 'panel' ? 'activo' : ''}">🏠 Inicio</a>
        <a href="historial_paseos.html" class="${paginaActual === 'historial' ? 'activo' : ''}">📜 Historial</a>
        <a href="transmision_vivo.html" class="${paginaActual === 'transmision' ? 'activo' : ''}">🎥 En Vivo</a>
        <a href="index.html">🚪 Salir</a>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", navbar);
  }
  