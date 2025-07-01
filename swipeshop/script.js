document.addEventListener('DOMContentLoaded', () => {
  const productContainer = document.getElementById('product-container');
  const popup = document.querySelector('.popup');
  const closePopup = document.getElementById('close-popup');

  popup.style.display = 'block';

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const sizeChartPopup = document.getElementById('sizeChartPopup');
    sizeChartPopup.style.display = 'none'; // Ensures the popup is hidden at startup
});


  fetch('/api/products')
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <p>₹${product.price}</p>
        `;
        productContainer.appendChild(card);
      });
    });
});
