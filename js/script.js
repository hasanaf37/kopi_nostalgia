// Navbar hamburger toggle
const hamburger = document.getElementById("hamburger-menu");
const nav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Smooth scroll dengan offset navbar
const navbarHeight = document.querySelector(".navbar").offsetHeight;

document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: "smooth",
    });
    // Tutup menu mobile jika dibuka
    nav.classList.remove("active");
  });
});
