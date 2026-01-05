console.clear();

const bookmarkButton = document.querySelector(".card__bookmark");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("card__bookmark--active");
});
