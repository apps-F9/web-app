document.addEventListener('DOMContentLoaded', function() {
    fetch('/products/')
        .then(response => response.json())
        .then(products => {
            var productListHtml = '';

            products.forEach(product => {
                productListHtml += '<div>' + product.name + ' - $' + product.price + '</div>';
            });

            document.getElementById('productList').innerHTML = productListHtml;
        });
});
