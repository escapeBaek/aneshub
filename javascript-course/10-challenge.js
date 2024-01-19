// The word "toggle" means turn on/off.// The word "toggle" means turn on/off.
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("is-toggled")) {
    removeToggle();
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

function removeToggle() {
  const previousButton = document.querySelector(".is-toggled");
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}
