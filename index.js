const bookmarks = document.querySelectorAll(
  ".question-card .material-symbols-rounded"
);
bookmarks.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("filled");
  });
});
