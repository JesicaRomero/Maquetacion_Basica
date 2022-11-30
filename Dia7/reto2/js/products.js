function loadProducts() {
  let element = `<div class="container mt-5">
    <div class="row gx-5">`

  products.forEach((product, index) => {
    element += `
      <div class="col">
      <div class="card p-2">
        <img
          src="${product.img}"
          class="card-img-top"
          alt="..."
          style="height: 350px;"
        />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p class="price">${product.price}€</p>
          <button onclick='addToShoppingCart(
              ${JSON.stringify(product)}
          )' type="button" class="btn btn-dark">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>`
    if ((index + 1) % 4 === 0)
      element += `<div class="w-100" style="height: 50px;"></div>`
  })
  element += `</div></div>`

  $('#products').html(element)
}

const products = [
  {
    img: './imagenesReto2/pantalones_tallealto.png',
    title: 'Pantalon suelto gris',
    price: 20,
  },
  {
    img: './imagenesReto2/vestido_tunico.png',
    title: 'Vestido Túnico',
    price: 18,
  },
  {
    img: './imagenesReto2/falda_print.png',
    title: 'Falda Mid Print',
    price: 12,
  },
  {
    img: './imagenesReto2/cardigan_largo_rayas.png',
    title: 'Cardigan Largo Rayas',
    price: 22,
  },
  {
    img: './imagenesReto2/falda_mini_zebra.png',
    title: 'Falda Mini Cebra',
    price: 15,
  },
  {
    img: './imagenesReto2/mono_overol.png',
    title: 'Mono Overol',
    price: 25,
  },
  {
    img: './imagenesReto2/vestido_jersey.png',
    title: 'Vestido Jersey',
    price: 19,
  },
  {
    img: './imagenesReto2/pantalones_tallealto.png',
    title: 'Pantalones Talle Alto',
    price: 24,
  },
]
