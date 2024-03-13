document.addEventListener('DOMContentLoaded', function() {
    loadProducts();

    document.getElementById('addProductForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var productName = document.getElementById('productName').value;
        var productPrice = document.getElementById('productPrice').value;

        var product = {
            name: productName,
            price: productPrice
        };

        fetch('/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Product added:', data);
            loadProducts();
        })
        .catch(error => {
            console.error('Error adding product:', error);
        });
    });
});

function loadProducts() {
    fetch('/products/')
        .then(response => response.json())
        .then(products => {
            var productListHtml = '';
            products.forEach(product => {
                productListHtml += '<div>' + product.name + ' - $' + product.price + '</div>';
            });
            document.getElementById('productList').innerHTML = productListHtml;
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}
