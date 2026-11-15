const tombol = document.getElementById("hmm");
const gambar = document.getElementById("surprise");

// Klik tombol -> munculkan gambar
tombol.addEventListener("click", () => {
    gambar.style.display = "block";
});

// Klik gambar -> tutup lagi
gambar.addEventListener("click", () => {
    gambar.style.display = "none";
});

document.addEventListener("mousemove", (e) => {
  const blok = document.createElement("div");
  blok.className = "blok";
  blok.style.left = e.clientX - 8 + "px";
  blok.style.top = e.clientY - 8 + "px";
  document.body.appendChild(blok);
  setTimeout(() => blok.remove(), 800);
});