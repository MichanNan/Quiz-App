const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
const showAnswerButtons = document.querySelectorAll(
  ".question-card__question__show-answer"
);
const answers = document.querySelectorAll(".question-card__answer");
const questionCard = document.querySelectorAll(".question-card");

bookmarks.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("filled");
  });
});

for (let i = 0; i < showAnswerButtons.length; i++) {
  showAnswerButtons[i].addEventListener("click", () => {
    answers[i].classList.toggle("hidden");
    answers[i].classList.contains("hidden")
      ? ((showAnswerButtons[i].textContent = "Show Answer"),
        (questionCard[i].style.height = "240px"))
      : ((showAnswerButtons[i].textContent = "Hide Answer"),
        (questionCard[i].style.height = "280px"));
  });
}
