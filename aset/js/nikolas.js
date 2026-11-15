const tombol = document.getElementById("hmm");
const overlay = document.getElementById("overlay");

// Klik tombol -> munculkan gambar
tombol.addEventListener("click", () => {
    overlay.style.display = "flex";
});

// Klik gambar -> tutup lagi
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});

document.addEventListener("mousemove", (e) => {
  const blok = document.createElement("div");
  blok.className = "blok";
  blok.style.left = e.clientX - 8 + "px";
  blok.style.top = e.clientY - 8 + "px";
  document.body.appendChild(blok);
  setTimeout(() => blok.remove(), 800);
});