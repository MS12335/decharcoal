// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
const hamburgerMenu = document.getElementById("hamburger-menu");

// munculkan sidebar menu
hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Animasi navigation bar
    if(wScroll > 0) {
        $(".navbar").addClass("scroll");
    } else if (wScroll == 0) {
        $(".navbar").removeClass("scroll");
    }
});

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// send WhatsApp Message
const sendWhatsappForm = document.getElementById("sendWhatsappForm");

sendWhatsappForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendWhatsAppMessage();
});

function sendWhatsAppMessage() {
    const name = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const weight = document.getElementById("weight").value;
    const quantity = document.getElementById("quantity").value;
    const region = document.getElementById("region").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value;
    const zip = document.getElementById("zip").value;

    var templateMessage = "Hello, my name is " + name + ". I want to buy "+ quantity + " of your Cube Briquettes and each one weight " + weight + ". I want it to be send to this address : " + "\n\nRegion : " + region + "\nCity : " + city + "\nCountry : " + country + "\nAddress : " + address + "\nZIP Code : " + zip + "\n\nYou can contact me at " + email + " or " + phone +". Thank You";

    var encodedMessage = encodeURIComponent(templateMessage);
    var whatsappURL = "https://wa.me/6289501051370?text=" + encodedMessage;

    window.open(whatsappURL);
}

