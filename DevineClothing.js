
function addToCart(itemName) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("popupText");

    text.innerText = itemName + " added to cart!";
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none"
    }, 2000);
}
