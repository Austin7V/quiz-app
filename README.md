# 📚 Quiz App — Mobile Web Application

Welcome to Quiz App — my first mobile-focused web application built as part of Recap Project 1.
This project represents an interactive learning interface where users can read questions, reveal answers, bookmark their favorites, and manage their profile.

The focus of the project is on layout, semantic HTML, responsive design, BEM naming, and a clean CSS component architecture.


## 🚀 Live Demo

👉 https://austin7v.github.io/quiz-app/


## 🧩 Overview

The application consists of three main pages:


## 🏠 Home Page

This page displays all question cards available in the app.

Each card includes:
- a question
- a hidden answer
- a “Show Answer” button
- tags
- a bookmark icon 🔖


## 🔖 Bookmarks Page

Shows only the bookmarked question cards.
The bookmark icon in the navbar is highlighted when this page is active.


## 👤 Profile Page

The profile page contains:
- avatar
- username
- About me section
- question & bookmark statistics
- Settings section
- visual Dark Mode toggle (non-functional for now)


## 🛠️ Setup

To run the project locally:

git clone https://github.com/Austin7V/quiz-app.git
cd quiz-app

Project Structure
```
quiz-app
├── assets
├── css
│   ├── components
│   │   ├── profile.css
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── header.css
│   │   └── navigation.css
│   ├── global.css
│   └── styles.css
├── index.html
├── bookmarks.html
└── profile.html
```

## 🎨 Features & Layout Tasks

1️⃣ Home Page
- Implemented the main header ```(<header> + <h1>)```.
- Built the question card layout based on the design specification.
- Added tag elements.
- Extracted the bottom navigation bar into a reusable component.
- Enabled scrollable question-card area.

2️⃣ Bookmarks Page
- Created a separate bookmarks.html file.
- Reused the same components from the Home Page.
- Highlighted the active bookmark icon in the navigation.
- Displayed only bookmarked question cards.

3️⃣ Profile Page (Bonus)

Fully implemented:
- avatar
- name
- “About me” text
- statistics section
- Dark Mode switch (visual only)
- mobile-first layout


## 🎯 Technologies Used

- HTML5 (semantic structure)
- CSS3
- Flexbox
- BEM naming methodology
- Component-based CSS architecture
- CSS custom properties for dark/light theme
- Git & GitHub
- GitHub Pages deployment


## 🔧 Deployment (GitHub Pages)

This project is deployed using GitHub Pages.
The site is automatically published from the main branch.


## 🔍 Accessibility

The project follows essential accessibility guidelines:

✔ Semantic HTML
✔ One ```<h1>``` per page
✔ Accessible labels for interactive elements
✔ High contrast colors
✔ Clear and descriptive text
✔ Minimal hidden content


## 📌 Naming Convention (BEM)

Example:
```
<article class="card">
  <h2 class="card__question"></h2>
  <button class="card__toggle"></button>
  <ul class="card__tags tag-list"></ul>
</article>
```
CSS files:
```
components/card.css
components/navigation.css
components/button.css
components/header.css
components/profile.css
```


## ✨ coming soon

- Real dark/light theme toggle (JavaScript)
- Functional bookmark system
- Show/hide answers with animation
- Save progress using localStorage
- Ability to add custom questions


## 👨‍💻 Author

- Sergey Badin (Austin7V)
- 📍 Germany
- 💼 Web Development Student
- GitHub: https://github.com/Austin7V
- Portfolio: coming soon
