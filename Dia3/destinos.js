function cargarDestinos() {
  const contenedorDestinos = document.getElementById('destinos')
  destinos.forEach((destino) => {
    contenedorDestinos.innerHTML += `<article class="card">
        <figure class="Imagen">
          <img
            class="ImagenCard"
            src="${destino.imagen}"
            alt="ImagenCard"
          />
        </figure>
        <div class="TexoCard">
          <h2 class="TituloDestino">${destino.titulo}</h2>
          <p>${destino.descripcion}</p>
        </div>
        <button class="botonCard boton_comun">Mas Info</button>
        </article>`
  })
}

const destinos = [
  {
    imagen:
      'https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg',
    titulo: 'Roma y la Toscana',
    descripcion: '7 dias y 6 noches desde 746€',
  },
  {
    imagen: 'https://www.viajarpraga.com/img/guia-viaje-praga.jpg',
    titulo: 'Praga y Viena',
    descripcion: '3 dias y 2 noches desde 526€',
  },
  {
    imagen:
      'https://viajes.nationalgeographic.com.es/medio/2019/04/01/pienza-ok_4053f58a_1344x779.jpg',
    titulo: 'Tour La Toscana',
    descripcion: '5 dias y 4 noches desde 925',
  },
  {
    imagen:
      'https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg',
    titulo: 'Paris',
    descripcion: '3 dias y 2 noches desde 530€',
  },
  {
    imagen:
      'https://estaticos.muyinteresante.es/uploads/images/gallery/6038bd2e5bafe839662838f3/croacia_redes.jpg',
    titulo: 'Croacia',
    descripcion: '8 dias y 7 noches desde 1025€',
  },
  {
    imagen:
      'https://fotografias.lasexta.com/clipping/cmsimages02/2019/09/12/5D543824-28C4-4EAB-9AAE-48E391FFA19F/98.jpg?crop=960,540,x0,y50&width=1900&height=1069&optimize=high&format=webply',
    titulo: 'Tunez',
    descripcion: '4 dias y 3 noches desde 350€',
  },
  {
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/6/6c/Egypt.Giza.Sphinx.02.jpg',
    titulo: 'Egipto',
    descripcion: '4 dias y 3 noches desde 780€',
  },
  {
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
    titulo: 'New York',
    descripcion: '9 dias y 8 noches desde 2350€',
  },
]
