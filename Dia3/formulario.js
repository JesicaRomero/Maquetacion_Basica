let localStorage = window.localStorage
let solicitudes =
  localStorage.getItem('solicitudes') === null
    ? []
    : JSON.parse(localStorage.getItem('solicitudes'))

function solicitarInfo() {
  let nombre = document.getElementById('nombre').value
  let origen = document.getElementById('origen').value
  let destino = document.getElementById('destino').value
  let numeroPersonas = document.getElementById('numeroPersonas').value
  let fecha = document.getElementById('fecha').value
  let solicitud = { nombre, origen, destino, numeroPersonas, fecha }
  solicitudes.push(solicitud)
  localStorage.setItem('solicitudes', JSON.stringify(solicitudes))
}

function filtarSolicitudes() {
  let destinosAFiltrar = ['canarias', 'mallorca', 'galicia']
  let solicitudesFiltradas = solicitudes.filter((solicitud) =>
    destinosAFiltrar.includes(solicitud.destino.toLowerCase())
  )
  console.log(solicitudesFiltradas)

  let elementoAIncluir = `<h2>Solicitudes Filtradas</h2>
  <table class='tablaInner' >
  <tr>
    <th>Nombre</th>
    <th>Origen</th>
    <th>Destino</th>
    <th>Numero de personas</th>
    <th>Fecha</th>
  </tr>
  `
  solicitudesFiltradas.forEach((solicitud) => {
    elementoAIncluir += `<tr>
    <td>${solicitud.nombre}</td>
    <td>${solicitud.origen}</td>
    <td>${solicitud.destino}</td>
    <td>${solicitud.numeroPersonas}</td>
    <td>${solicitud.fecha}</td>
  </tr>
</tr>`
  })

  elementoAIncluir += `</table>`
  document.getElementById('destinosFiltrados').innerHTML = elementoAIncluir
}
