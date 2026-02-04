const envelope = document.getElementById("envelope");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const successMessage = document.getElementById("successMessage");
const heartsContainer = document.getElementById("hearts-container");

/* Open envelope */
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

/* NO button dodge */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES button */
yesBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  successMessage.classList.remove("hidden");
  createHearts();
});

/* Hearts */
function createHearts() {
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
