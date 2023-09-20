let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const shoppingCart = [];

// Function to add an item to the shopping cart
function addToCart(itemName, itemPrice) {
  const quantity = parseInt(document.getElementById(`${itemName}-quantity`).value);
  const item = {
    name: itemName,
    price: itemPrice,
    quantity: quantity
  };
  shoppingCart.push(item);
  updateCartDisplay();
  calculateTotal();
}

// Function to update the shopping cart display
function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  shoppingCart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity}
      <button onclick="incrementQuantity('${item.name}')">+</button>
      <button onclick="decrementQuantity('${item.name}')">-</button>
    `;
    cartItemsElement.appendChild(li);
  });

  calculateTotal();
}

// Function to calculate the total cost
function calculateTotal() {
  const totalElement = document.getElementById('cart-total');
  const total = shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalElement.textContent = `$${total}`;
}

// Function to increment quantity
function incrementQuantity(itemName) {
  const item = shoppingCart.find(item => item.name === itemName);
  if (item) {
    item.quantity++;
    updateCartDisplay();
  }
}

// Function to decrement quantity
function decrementQuantity(itemName) {
  const item = shoppingCart.find(item => item.name === itemName);
  if (item && item.quantity > 1) {
    item.quantity--;
    updateCartDisplay();
  }
}
function checkout() {
    const total = shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    alert(`Total Amount: $${total}\nThank you for your purchase!`);
    shoppingCart.length = 0; // Clear the shopping cart
    updateCartDisplay();
  }

  function addToCart(itemName, itemPrice) {
    const quantity = parseInt(document.getElementById(`${itemName}-quantity`).value);
    let size = '';

    // Check if the item is a necklace and get the selected size
    if (itemName === 'Necklace') {
      size = document.getElementById('necklace-size').value;
    }

    const item = {
      name: `${itemName} - ${size}`, // Include size in the item name
      price: itemPrice,
      quantity: quantity,
    };

    shoppingCart.push(item);
    updateCartDisplay();
    calculateTotal();
  }
  function addToCart(itemName, itemPrice) {
    const quantity = parseInt(document.getElementById(`${itemName}-quantity`).value);
    let size = '';
    let color1 = '';
    let color2 = '';
    let pendant = '';
    
    // Check if the item is a necklace and get the selected size and two colors
    if (itemName === 'Necklace') {
      size = document.getElementById('necklace-size').value;
      color1 = document.getElementById('necklace-color1', 'combo-color1', 'bracelet-color1' ).value;
      color2 = document.getElementById('necklace-color2', 'combo-color2', 'bracelet-color2').value;
      pendant = document.getElementById('necklace-pendant').value;
    }

    const item = {
      name: `${itemName} - ${size} - ${color1}/${color2} - ${pendant}`, // Include size and two colors in the item name
      price: itemPrice,
      quantity: quantity,
      pendant: pendant,
      

    };

    shoppingCart.push(item);
    updateCartDisplay();
    calculateTotal();
  }
  

  const sendMessageButton = document.getElementById('sendMessageButton');

  // Add a click event listener to the button
  sendMessageButton.addEventListener('click', function () {
    // Display an alert when the button is clicked
    alert('Message sent successfully!');
  });

  function deleteCart() {
    shoppingCart.length = 0; // Clear the shopping cart
    updateCartDisplay();
    calculateTotal();
  }
