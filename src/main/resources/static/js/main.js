document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;

    var newProduct = {
        name: productName,
        price: productPrice
    };

    fetch('/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(createdProduct => {
        alert('New product created successfully: ' + createdProduct.name);
        fetchProductListing();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to create product');
    });
});

function fetchProductListing() {
    fetch('/products/')
    .then(response => response.json())
    .then(products => {
        var productListingHtml = '';

        products.forEach(product => {
            productListingHtml += '<div>' + product.name + ' - $' + product.price + '</div>';
        });

        document.getElementById('productListing').innerHTML = productListingHtml;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Fetch product listing on page load
fetchProductListing();
