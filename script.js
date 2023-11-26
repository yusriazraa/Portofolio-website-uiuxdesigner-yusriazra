const toggleNavButton = document.getElementById("yusri-toggleNav");
const navbar = document.getElementById("yusri-navbar");
const body = document.body;

toggleNavButton.addEventListener("click", () => {
  navbar.style.width = navbar.style.width === "100%" ? "0" : "100%";
  body.classList.toggle("active-nav");
});

// Tambahkan event listener untuk setiap menu navigasi
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.style.width = "0";
    body.classList.remove("active-nav");
  });
});

// Tutup navbar jika mengklik latar belakang
window.addEventListener("click", (e) => {
  if (e.target === navbar) {
    navbar.style.width = "0";
    body.classList.remove("active-nav");
  }
});

// Tombol ikut mengikuti saat di-scroll
window.addEventListener("scroll", () => {
  toggleNavButton.style.top = `${window.scrollY + 20}px`;
});

//submit Alert contact
function yusri_alert() {
  nama = document.getElementById("name").value;
  pesan = document.getElementById("message").value;
  alert("name " + nama + " -- " + "message : " + pesan);
}
