const envelope = document.getElementById("envelope");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const successMessage = document.getElementById("successMessage");
const heartsContainer = document.getElementById("hearts-container");

/* Open envelope on click */
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

/* Playful NO button behavior */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES button success */
yesBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  successMessage.classList.remove("hidden");
  createHearts();
});

/* Floating hearts animation */
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
