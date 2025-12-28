const socket = io();

const form = document.getElementById("productForm");
const list = document.getElementById("productList");

form.addEventListener("submit", e => {
    e.preventDefault();

    const product = {
        title: form.title.value,
        price: form.price.value
    };

    socket.emit("newProduct", product);
    form.reset();
});

socket.on("products", products => {
    list.innerHTML = "";
    products.forEach(p => {
        list.innerHTML += `<li>${p.title} - $${p.price}</li>`;
    });
});
