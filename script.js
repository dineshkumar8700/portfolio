function currentDateAndTime() {
  const now = new Date();

  const formatted = now.toLocaleString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return formatted.replace(",", "");
}

const addCurrentTime = () => {
  const timeArea = document.querySelector("#current-time");
  const currentTime = currentDateAndTime();
  timeArea.innerHTML = currentTime;
};

addCurrentTime();

setInterval(() => {
  addCurrentTime();
}, 60000);

const aboutModalBtn = document.querySelector("#about-modal-btn");
const aboutModal = document.querySelector("#about-modal");
const modalCloseBtn = document.querySelector("#close-about-btn");

aboutModalBtn.addEventListener("click", () => {
  aboutModal.style.opacity = 1;
  aboutModal.style.pointerEvents = "auto";
});

modalCloseBtn.addEventListener("click", () => {
  aboutModal.style.opacity = 0;
  aboutModal.style.opacity = 0;
});
