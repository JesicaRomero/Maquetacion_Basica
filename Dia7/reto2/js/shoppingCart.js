const shoppingCart = []

function addToShoppingCart(product) {
  shoppingCart.push(product)
}

function showShoppingCart() {
  if (shoppingCart.length > 0) {
    let total = 0
    let productList = `<ul>`
    for (let product of shoppingCart) {
      total += product.price
      productList += `<li>${product.title} - ${product.price}€</li>`
    }
    productList += `</ul>`
    $('#productList').html(productList)
    $('#totalPrice').html(`TOTAL COMPRA: ${total}€`)
  }
}
