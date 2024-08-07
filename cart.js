let listProducts = [];
let carts = [];

const salesContainer = document.querySelector(".sales-container");
const cartContentHTML = document.querySelector(".cart .cart-content");

function formatMoney(price) {
  return price.replace(".", ",")
}

function addDataToHTML() {
  salesContainer.innerHTML = "";

  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("card-sale");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
           
              <img src="./camiseta-preta-2.png" alt="Camiseta preta sem fundo" />
              <div class="card-sale-content">
                <h3>${product.name}</h3>
                <strong class="price">R$ ${formatMoney(product.price.toFixed(2))}</strong>
                <p>até 4x de R$ 49,99 sem juros</p>
              </div>
              <button class="addCart">
                <i class='bx bx-cart-add'></i>
              </button>

              <div class="about">
                <a href="/details.html" >Comprar</a>
              </div>
            
      `;

      salesContainer.appendChild(newProduct);
    })
  }
}

function addToCart(productId) {
  let positionThisProductInCart = carts.findIndex((value) => value.product_id == productId);

  if (carts.length <= 0) {
    carts = [{
      product_id: productId,
      quantity: 1
    }]
  } else if (positionThisProductInCart < 0) {
    carts.push({
      product_id: productId,
      quantity: 1,
    })
  } else {
    carts[positionThisProductInCart].quantity += 1;
  }

  addCartToHTML()
}

function addCartToHTML() {
  cartContentHTML.innerHTML = "";
  document.getElementById("info_msg").style.display = "none";

  if (carts.length > 0) {
    document.querySelector(".cart .buy-btn").classList.remove("disabled");

    carts.forEach((cart, index) => {
      let newCart = document.createElement("div");
      newCart.classList.add("item");

      let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);

      let info = listProducts[positionProduct];

      newCart.innerHTML = `
        <img src="./camiseta-preta-2.png" width="70px" alt="" />

          <div class="item-info">
            <h2>${info.name}</h2>
            <p>Camiseta</p>

            <div class="informations">
              <p>Quant. ${cart.quantity}</p>

              <div class="icon-actions">
                <i onclick="removeItemToCart(${index})" class="bx bx-trash"></i>
              </div>
            </div>
          </div>
      `;

      cartContentHTML.appendChild(newCart);
    })
  } else {
    document.getElementById("info_msg").style.display = "block";
    document.querySelector(".cart .buy-btn").classList.add("disabled");
  }
};

function addTotalPriceToCart(price) {
  let subtotal = document.getElementById("price");

  subtotal.innerHTML = `R$ ${formatMoney(price.toFixed(2))}`;
}

function removeItemToCart(index) {
  carts.splice(index, 1);
  addCartToHTML();
}

salesContainer.addEventListener("click", (ev) => {
  let positionClick = ev.target;

  if (positionClick.classList.contains("addCart")) {
    let productId = positionClick.parentElement.dataset.id;
    addToCart(productId);
  }
})

function inicializarApp() {
  fetch("products.json").then((res) => res.json()).then((data) => {
    listProducts = data;
    addDataToHTML();
  })
}

inicializarApp();