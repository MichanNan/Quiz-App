const form = document.querySelector(".add_quesstion");
const addedNewQuestion = document.querySelector(".added_new_question");
const questionLimit = document.querySelector(".add_question__question_limit");
const answerLimit = document.querySelector(".add_question__answer_limit");

function createNewElement(
  element,
  parentElement,
  newClassName,
  newAttribute,
  newContent
) {
  const newElement = document.createElement(element);
  parentElement.append(newElement);
  newElement.classList.add(newClassName);
  newElement.setAttribute("data-js", newAttribute);
  newElement.textContent = newContent;

  return newElement;
}

//creat new card function
function createNewCard(formQuestion, formAnswer, formTag) {
  //add new question card
  const newSection = createNewElement(
    "section",
    addedNewQuestion,
    "question-card"
  );

  //add new bookmark
  const newBookmark = createNewElement(
    "div",
    newSection,
    "question-card__bookmark"
  );

  const newSymbol = createNewElement(
    "span",
    newBookmark,
    "material-symbols-rounded",
    "bookmark",
    "bookmark"
  );

  //add new question feld
  const newQuestion = createNewElement(
    "div",
    newSection,
    "question-card__question"
  );

  const newQuestionText = createNewElement(
    "p",
    newQuestion,
    "question-card__question__text",
    "",
    `${formQuestion}`
  );

  const newButon = createNewElement(
    "button",
    newQuestion,
    "question-card__question__show-answer",
    "",
    "Show Answer"
  );

  const newQuestionAnswer = createNewElement(
    "p",
    newQuestion,
    "question-card__answer",
    "",
    `${formAnswer}`
  );

  //add new categories
  const newCategories = createNewElement(
    "ul",
    newSection,
    "question-card__categories"
  );

  const newCategoryItem = createNewElement(
    "li",
    newCategories,
    "question-card__categories__item",
    "",
    `${formTag}`
  );
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
  const [formInputQuestion, formInputAnswer, formInputTag] = getData();
  createNewCard(formInputQuestion, formInputAnswer, formInputTag);
  form.reset();
});

//input listener check how many input characters left
form.addEventListener("input", (e) => {
  e.preventDefault();
  const [formInputQuestion, formInputAnswer] = getData();

  questionLimit.textContent = `${
    150 - formInputQuestion.length
  } characters left`;

  answerLimit.textContent = `${150 - formInputAnswer.length} characters left`;
});
