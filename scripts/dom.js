function getCurrentTime() {
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
  const currentTime = getCurrentTime();
  timeArea.textContent = currentTime;
};

updateTime = () => setInterval(addCurrentTime, 60000);

const openModal = (modal) => {
  const openBtn = document.querySelector("#about-modal-btn");

  openBtn.addEventListener("click", () => {
    modal.style.opacity = 1;
    modal.style.pointerEvents = "auto";
  });
};

const closeModal = (modal) => {
  const closeBtn = document.querySelector("#close-about-btn");

  closeBtn.addEventListener("click", () => {
    modal.style.opacity = 0;
  });
};

const attacheListeners = () => {
  const aboutModal = document.querySelector("#about-modal");
  openModal(aboutModal);
  closeModal(aboutModal);
};

const removeLoader = () => {
  const loader = document.querySelector(".loading-animation");
  setTimeout(() => {
    loader.remove();
  }, 2000);
};

window.onload = () => {
  removeLoader();
  addCurrentTime();
  updateTime();
  attacheListeners();
};
