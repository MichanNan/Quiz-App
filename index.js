const bookmarks = document.querySelectorAll(
  ".question-card .material-symbols-rounded"
);
bookmarks.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("filled");
  });
});

const showAnsweButtons = document.querySelectorAll(
  ".question-card__question__show-answer"
);
const answers = document.querySelectorAll(".question-card__answer");

for (let i = 0; i < showAnsweButtons.length; i++) {
  showAnsweButtons[i].addEventListener("click", () => {
    answers[i].classList.toggle("hidden");
    answers[i].classList.contains("hidden")
      ? (showAnsweButtons[i].textContent = "Show Answer")
      : (showAnsweButtons[i].textContent = "Hide Answer");
  });
}
