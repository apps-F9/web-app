document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var searchQuery = document.getElementById('searchQuery').value;

    fetch('/products/search?query=' + encodeURIComponent(searchQuery))
        .then(response => response.json())
        .then(products => {
            var searchResultsHtml = '';

            products.forEach(product => {
                searchResultsHtml += '<div>' + product.name + ' - $' + product.price + '</div>';
            });

            document.getElementById('searchResults').innerHTML = searchResultsHtml;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
