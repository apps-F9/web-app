document.addEventListener('DOMContentLoaded', function() {
    // Load existing products when the page loads
    loadProducts();

    // Add event listener to the form for adding a new product
    document.getElementById('addProductForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var productName = document.getElementById('productName').value;
        var productPrice = document.getElementById('productPrice').value;

        // Add logic to send a request to the backend to add the new product
        // You'll handle this in the backend section
        console.log('Adding product:', productName, productPrice);

        // After adding the product, reload the product list
        loadProducts();
    });

    // Function to load existing products
    function loadProducts() {
        // Add logic to fetch existing products from the backend
        // and display them in the productList div
        var productListDiv = document.getElementById('productList');
        productListDiv.innerHTML = ''; // Clear previous product list

        // For each product, create a div and display its details
        // Include an "Edit" button to trigger the editing functionality
        // This part will be implemented after updating the backend
        var products = [
            { id: 1, name: 'Product 1', price: 19.99 },
            { id: 2, name: 'Product 2', price: 29.99 },
            { id: 3, name: 'Product 3', price: 39.99 }
        ];

        products.forEach(product => {
            var productDiv = document.createElement('div');
            productDiv.innerHTML = `${product.name} - $${product.price} <button class="editProduct">Edit</button>`;
            productListDiv.appendChild(productDiv);

            // Add event listener to each "Edit" button
            productDiv.querySelector('.editProduct').addEventListener('click', function() {
                // Open the edit modal and populate it with the product details
                openEditModal(product);
            });
        });
    }

    // Function to open the edit modal with pre-filled product details
    function openEditModal(product) {
        var modal = document.getElementById('editProductModal');
        var productNameInput = document.getElementById('editProductName');
        var productPriceInput = document.getElementById('editProductPrice');

        // Populate the modal with the product details
        productNameInput.value = product.name;
        productPriceInput.value = product.price;

        // Display the modal
        modal.style.display = 'block';

        // Add event listener to the "Save Changes" button
        document.getElementById('saveProductChanges').addEventListener('click', function() {
            // Retrieve the updated product details from the modal
            var updatedProductName = productNameInput.value;
            var updatedProductPrice = productPriceInput.value;

            // Add logic to send a request to the backend to update the product
            // You'll handle this in the backend section
            console.log('Updating product:', product.id, updatedProductName, updatedProductPrice);

            // Close the modal after saving changes
            modal.style.display = 'none';

            // Reload the product list to reflect the changes
            loadProducts();
        });
    }
});
