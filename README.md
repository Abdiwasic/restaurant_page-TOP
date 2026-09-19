# restaurant_page-TOP

🍽️ Restaurant Page
A dynamic, tabbed restaurant homepage built entirely using JavaScript and DOM manipulation, bundled with Webpack.

This project was developed as part of The Odin Project's JavaScript Curriculum.

🚀 About the Project
The primary goal of this project is to practice creating and manipulating DOM elements dynamically using JavaScript modules rather than hardcoding HTML content. Apart from a minimal HTML skeleton, the entire user interface—including the homepage, menu, and contact sections—is generated on the fly.

Key Features
Dynamic DOM Manipulation: All HTML content is rendered dynamically through JavaScript.

Tab-Based Navigation: Seamless switching between the Home, Menu, and Contact pages without page reloads.

Modular JavaScript (ES6 Modules): Code is structured into dedicated modules to maintain separation of concerns.

Webpack Setup with webpack-merge: Uses a modular configuration split across three files:

webpack.common.js – Contains base rules and shared loaders for all environments.

webpack.dev.js – Contains development server and source map configurations.

webpack.prod.js – Handles production optimization and build bundling.

🛠️ Built With:

    JavaScript (ES6+)

    HTML5 & CSS3

    Webpack & Webpack Dev Server

    webpack-merge

    GitHub Pages

💻 Getting Started
Prerequisites
Ensure you have Node.js and npm installed on your machine.

Installation
**Clone the repository:**

```bash
git clone [https://github.com/your-username/restaurant-page.git](https://github.com/your-username/restaurant-page.git)
cd restaurant-page
```

Install dependencies:

```bash
npm install
```

📜 Available Scripts
In the project directory, you can run the following scripts:

npm run dev
Runs the app in development mode by merging webpack.common.js and webpack.dev.js.

It starts the development server with live reloading and automatically opens http://localhost:8080 in your default browser.

```bash
npm run dev
```

npm run build
Bundles the app for production into the dist folder by merging webpack.common.js and webpack.prod.js.

It optimizes the build for performance and minimizes the output files.

```bash
npm run build
```

npm run deploy
Pushes the contents of your dist folder directly to the gh-pages branch on GitHub using git subtree to update the live site.

```bash
npm run deploy
```
