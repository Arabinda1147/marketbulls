function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = sidebar.style.right === "0px" ? "-250px" : "0px";
}

// Redirect or open stock list page
document.addEventListener("DOMContentLoaded", function() {
    const stockBtn = document.querySelector(".stock-btn");
    if (stockBtn) {
        stockBtn.addEventListener("click", function() {
            alert("Redirecting to Stock List...");
            window.location.href = "stock-list.html"; // Replace with your stock list page
        });
    }
});
