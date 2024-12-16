document.querySelectorAll('.wishlist-button').forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.parentElement;
        const product = {
            name: productItem.querySelector('h3').innerText,
            price: productItem.querySelector('p').innerText,
            image: productItem.querySelector('img').src
        };

        // Retrieve existing wishlist from local storage
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        // Check if product is already in wishlist
        const exists = wishlist.some(item => item.name === product.name);
        if (!exists) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert('Product added to wishlist!');
        } else {
            alert('This product is already in your wishlist.');
        }
    });
});
