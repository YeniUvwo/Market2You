document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const orderNumber = "ORD" + Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit order number
    document.getElementById("orderNumber").textContent = orderNumber;

    const market = document.getElementById("market").value;
    const items = document.getElementById("items").value;
    const deliveryTime = document.getElementById("delivery-time").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const repNumber = "2348119900790";
    const message = `Order Number: ${orderNumber}\nMarket: ${market}\nCustomer: ${name}\nPhone: ${phone}\nItems: ${items}\nDelivery Time: ${deliveryTime}`;
    const whatsappURL = `https://wa.me/${repNumber}?text=${encodeURIComponent(message)}`;

    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    document.getElementById("confirmRedirect").addEventListener("click", function() {
        document.getElementById("orderForm").reset();
        modal.style.display = "none";
        window.location.href = whatsappURL;
        // window.location.href = window.open(whatsappURL, '_blank');
    });
});