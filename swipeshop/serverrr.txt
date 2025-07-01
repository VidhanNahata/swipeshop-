let cart = []; // Array to hold cart items

// Function to handle the "Dislike" swipe
function dislikeProduct(id) {
  const productElement = document.getElementById(`product-${id}`);
  if (productElement) {
    productElement.style.display = "none"; // Hide the disliked product
  }
  alert("You disliked this product!");
}

// Function to handle the "Like" swipe
function likeProduct(id) {
  alert("You liked this product!");
}

// Function to add a product to the cart
function addToCart(id) {
  const productElement = document.getElementById(`product-${id}`);
  const name = productElement.querySelector(".product-name").textContent;
  const price = productElement.querySelector(".product-price").textContent.replace("₹", "");
  cart.push({ id, name, price });

  // Update cart count
  document.getElementById("cartCount").textContent = cart.length;
  alert(`${name} has been added to your cart.`);
}

// Function to view cart
function showCart() {
  const cartDiv = document.getElementById("cart");
  const cartItems = document.getElementById("cartItems");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.innerHTML = cart
      .map((item) => `<li>${item.name} - ₹${item.price}</li>`)
      .join("");
  }
  cartDiv.style.display = "block";
}

// Function to close the cart
function closeCart() {
  document.getElementById("cart").style.display = "none";
}

// Function to handle "Buy Now" with Cash on Delivery
function buyNow(id) {
  const productElement = document.getElementById(`product-${id}`);
  const name = productElement.querySelector(".product-name").textContent;
  const price = productElement.querySelector(".product-price").textContent.replace("₹", "");

  // Show size chart and collect details
  const size = prompt("Select a size: S, M, L, XL");
  if (!size) {
    alert("You must select a size to continue!");
    return;
  }

  const customerName = prompt("Enter your name:");
  const address = prompt("Enter your address:");

  if (!customerName || !address) {
    alert("Name and address are required!");
    return;
  }

  // Confirm order
  const confirmation = confirm(
    `Order Details:\n\nProduct: ${name}\nPrice: ₹${price}\nSize: ${size}\nName: ${customerName}\nAddress: ${address}\n\nClick OK to confirm your order with Cash on Delivery.`
  );

  if (confirmation) {
    alert("Your order has been placed successfully with Cash on Delivery! Thank you for shopping with us.");
  } else {
    alert("Your order was canceled.");
  }
}

// Function to close the instructions popup
function closeInstructions() {
  document.getElementById("instructions").style.display = "none";
}