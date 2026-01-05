console.clear();

console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const question = formData.get("question");
  const answer = formData.get("answer");
  const tag = formData.get("tag");

  const card = document.createElement("article");
  card.classList.add("card");

  const questionElement = document.createElement("h2");
  questionElement.classList.add("card__question");
  questionElement.textContent = question;

  const answerElement = document.createElement("p");
  answerElement.classList.add("card__answer", "hidden");
  answerElement.textContent = answer;

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.classList.add("card__toggle");
  toggleButton.textContent = "Show Answer";

  const tagsList = document.createElement("ul");
  tagsList.classList.add("card__tags", "tag-list");

  const tagItem = document.createElement("li");
  tagItem.classList.add("tag-list__item", "tag-list__item--active");
  tagItem.textContent = tag.startsWith("#") ? tag : `#${tag}`;

  tagsList.append(tagItem);

  const bookmarkButton = document.createElement("button");
  bookmarkButton.type = "button";
  bookmarkButton.classList.add("card__bookmark");
  bookmarkButton.setAttribute("aria-label", "Add to bookmarks");
  bookmarkButton.textContent = "🔖";

  card.append(
    questionElement,
    answerElement,
    toggleButton,
    tagsList,
    bookmarkButton
  );

  form.insertAdjacentElement("afterend", card);

  event.target.reset();
});
