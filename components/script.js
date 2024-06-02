document.addEventListener('DOMContentLoaded', function () {
    const productGrid = document.getElementById('productGrid');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const closeModalButton = document.getElementById('closeModal');
    const searchInput = document.getElementById('searchInput');
  
    let productsData = []; // Store all products data
  
    // Fetch product data from the mock API and initialize productsData array
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        productsData = products;
        renderProducts(productsData); // Render all products initially
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  
    // Event listener for the search input
    searchInput.addEventListener('input', function () {
      const searchQuery = searchInput.value.toLowerCase();
      const filteredProducts = productsData.filter(product => 
        product.title.toLowerCase().includes(searchQuery)
      );
      renderProducts(filteredProducts); // Render filtered products
    });
  
    // Function to render products in the product grid
    function renderProducts(products) {
      // Clear the existing product grid
      productGrid.innerHTML = '';
  
      // Iterate over the products and create HTML elements for each product
      products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
  
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.classList.add('product-image');
  
        const productName = document.createElement('h3'); // Change h3 tag for product name
        productName.textContent = product.title; // Set product name text content
        productName.classList.add('product-name'); // Add class for styling
  
        // Event listener to open modal with product details when product image is clicked
        productImage.addEventListener('click', () => {
          displayProductDetails(product);
        });
  
        productItem.appendChild(productImage);
        productItem.appendChild(productName); // Append product name to product item
        productGrid.appendChild(productItem);
      });
    }
  
    // Function to display product details in the modal
    function displayProductDetails(product) {
      modal.style.display = 'block';
      modalContent.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
      `;
    }
  
    // Event listener to close the modal when the close button is clicked
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Event listener to close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  