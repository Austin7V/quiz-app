console.clear();

const bookmarkButton = document.querySelector(".card__bookmark");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("card__bookmark--active");
});

const answerButton = document.querySelector(".card__toggle");
const answerText = document.querySelector(".card__answer");

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("hidden");

  const isHidden = answerText.classList.contains("hidden");
  answerButton.textContent = isHidden ? "Show Answer" : "Hide Answer";
});
