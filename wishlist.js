// function addToWishlist(product) {
//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     wishlist.push(product);
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
// }

// function displayWishlist() {
//     const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     const container = document.getElementById('wishlist-container');

//     if (wishlist.length === 0) {
//         container.innerHTML = '<p>Your wishlist is empty.</p>';
//         return;
//     }

//     wishlist.forEach(item => {
//         const productItem = document.createElement('div');
//         productItem.className = 'product-item';
//         productItem.innerHTML = `
//             <img src="${item.image}" alt="${item.name}">
//             <h3>${item.name}</h3>
//             <p>${item.price}</p>
//         `;
//         container.appendChild(productItem);
//     });
// }

// displayWishlist();

function displayWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const container = document.getElementById('wishlist-container');

    if (wishlist.length === 0) {
        container.innerHTML = '<p>Your wishlist is empty.</p>';
        return;
    }

    wishlist.forEach(item => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        container.appendChild(productItem);
    });
}


displayWishlist();



