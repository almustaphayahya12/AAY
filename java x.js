
// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}

// Order Form
function submitForm() {
    alert("Thank you! Your order has been received successfully.");
    return false; // Prevent page refresh
}

// Back-to-Top Button
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";

    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to Top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
