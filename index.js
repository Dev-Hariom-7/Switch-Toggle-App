let btn = document.getElementById("toggleBtn");

let bulb = document.getElementById("bulb");

btn.addEventListener("click", toggleBulb);

function toggleBulb(e) {
  if (btn.textContent.includes("On")) {
    bulb.src = "images/litt.jpg.webp";
    btn.textContent = "Turn off";
  } else {
    bulb.src = "images/dim.jpg.webp";
    btn.textContent = "Turn On";
  }
}
