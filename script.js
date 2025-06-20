const products = [
  { id: 1, name: "Smartphone", price: 12000, img: "https://via.placeholder.com/200x150?text=Smartphone" },
  { id: 2, name: "Headphones", price: 1500, img: "https://via.placeholder.com/200x150?text=Headphones" },
  { id: 3, name: "Shoes", price: 2500, img: "https://via.placeholder.com/200x150?text=Shoes" },
  { id: 4, name: "Wrist Watch", price: 3000, img: "https://via.placeholder.com/200x150?text=Watch" }
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

document.getElementById("cart").addEventListener("click", () => {
  const popup = document.getElementById("cart-popup");
  const items = document.getElementById("cart-items");
  const total = document.getElementById("total");

  items.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    items.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
    sum += item.price;
  });

  total.textContent = sum;
  popup.style.display = "block";
});

function closeCart() {
  document.getElementById("cart-popup").style.display = "none";
}

renderProducts();
