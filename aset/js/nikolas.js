const tombol = document.getElementById("hmm");
const overlay = document.getElementById("overlay");

tombol.addEventListener("click", () => (overlay.style.display = "flex"));
overlay.addEventListener("click", () => (overlay.style.display = "none"));

const laser = document.createElement("div");
laser.id = "laser";
document.body.appendChild(laser);

const canvas = document.createElement("canvas");
canvas.id = "trail";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

function ukuran() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
ukuran();
window.addEventListener("resize", ukuran);

const pet = document.getElementById("pet");
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const petPos = { x: mouse.x, y: mouse.y };
const titik = [];
const UMUR_JEJAK = 400;

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  laser.style.display = "block";
  laser.style.left = mouse.x + "px";
  laser.style.top = mouse.y + "px";
  titik.push({ x: mouse.x, y: mouse.y, t: performance.now() });
});

function gambarJejak(sekarang) {
  while (titik.length && sekarang - titik[0].t > UMUR_JEJAK) titik.shift();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineCap = "round";
  ctx.shadowColor = "#ff0000";
  ctx.shadowBlur = 10;

  for (let i = 1; i < titik.length; i++) {
    const a = titik[i - 1];
    const b = titik[i];
    const sisa = 1 - (sekarang - b.t) / UMUR_JEJAK;
    ctx.strokeStyle = `rgba(255, 40, 40, ${sisa})`;
    ctx.lineWidth = 1 + 5 * sisa;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }
}

function gerakPet(dt) {
  const dx = mouse.x - petPos.x;
  const dy = mouse.y - petPos.y;

  const faktor = 1 - Math.pow(0.001, dt);
  petPos.x += dx * faktor;
  petPos.y += dy * faktor;

  pet.style.left = petPos.x - pet.width / 2 + "px";
  pet.style.top = petPos.y - pet.height / 2 + "px";

  if (Math.abs(dx) > 1) {
    pet.style.transform = dx > 0 ? "scaleX(1)" : "scaleX(-1)";
  }
}

let waktuTerakhir = performance.now();

function update(sekarang) {
  const dt = Math.min((sekarang - waktuTerakhir) / 1000, 0.1);
  waktuTerakhir = sekarang;

  gambarJejak(sekarang);
  gerakPet(dt);
  requestAnimationFrame(update);
}
requestAnimationFrame(update);