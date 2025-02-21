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

// 🚀 Integrate Upstox API Login
async function getLoginUrl() {
    try {
        const response = await fetch('https://your-aws-server.com/login');  // Replace with your AWS backend URL
        const data = await response.json();
        window.location.href = data.loginUrl;  // Redirect to Upstox login page
    } catch (error) {
        console.error("Error fetching login URL:", error);
        alert("Failed to connect to Upstox. Please try again.");
    }
}

// Attach event listener to login button
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", getLoginUrl);
    }
});
