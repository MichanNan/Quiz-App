const form = document.querySelector(".add_quesstion");
const addedNewQuestion = document.querySelector(".added_new_question");
const questionLimit = document.querySelector(".add_question__question_limit");
const answerLimit = document.querySelector(".add_question__answer_limit");

//creat new card function
function createNewCard(formQuestion, formAnswer, formTag) {
  //add new question card
  const newSection = document.createElement("section");
  addedNewQuestion.append(newSection);
  newSection.classList.add("question-card");

  //add new bookmark
  const newBookmark = document.createElement("div");
  newSection.append(newBookmark);
  newBookmark.classList.add("question-card__bookmark");

  const newSymbol = document.createElement("span");
  newBookmark.append(newSymbol);
  newSymbol.classList.add("material-symbols-rounded");
  newSymbol.setAttribute("data-js", "bookmark");
  newSymbol.textContent = "bookmark";

  //add new question feld
  const newQuestion = document.createElement("div");
  newSection.append(newQuestion);
  newQuestion.classList.add("question-card__question");

  const newQuestionText = document.createElement("p");
  newQuestion.append(newQuestionText);
  newQuestionText.classList.add("question-card__question__text");
  newQuestionText.textContent = `${formQuestion}`;

  const newButton = document.createElement("button");
  newQuestion.append(newButton);
  newButton.classList.add("question-card__question__show-answer");
  newButton.textContent = "Show Answer";

  const newQuestionAnswer = document.createElement("p");
  newQuestion.append(newQuestionAnswer);
  newQuestionAnswer.classList.add("question-card__answer");
  newQuestionAnswer.textContent = `${formAnswer}`;

  //add new categories
  const newCategories = document.createElement("ul");
  newSection.append(newCategories);
  newCategories.classList.add("question-card__categories");

  const newCategoryItem = document.createElement("li");
  newCategories.append(newCategoryItem);
  newCategoryItem.classList.add("question-card__categories__item");
  newCategoryItem.textContent = `${formTag}`;
}

//get form data function
function getData() {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const formInputQuestion = data.add_question__question;
  const formInputAnswer = data.add_question__answer;
  const formInputTag = data.add_question__tag;

  return [formInputQuestion, formInputAnswer, formInputTag];
}

//submit listener add new question card
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = getData();
  console.log(getData);
  createNewCard(formData[0], formData[1], formData[2]);
});

//input listener check how many input characters left
form.addEventListener("input", (e) => {
  e.preventDefault();
  const formData = getData();
  console.log(getData);

  questionLimit.textContent = `${150 - formData[0].length} characters left`;

  answerLimit.textContent = `${150 - +formData[1].length} characters left`;
});
