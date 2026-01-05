console.clear();

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const bookmarkButton = card.querySelector(".card__bookmark");
  const answerButton = card.querySelector(".card__toggle");
  const answerText = card.querySelector(".card__answer");

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("card__bookmark--active");
  });

  answerButton.addEventListener("click", () => {
    answerText.classList.toggle("hidden");

    const isHidden = answerText.classList.contains("hidden");
    answerButton.textContent = isHidden ? "Show Answer" : "Hide Answer";
  });
});
