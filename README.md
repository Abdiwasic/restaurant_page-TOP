# restaurant_page-TOP
🍽️ Restaurant Page
A dynamic, tabbed restaurant homepage built entirely using JavaScript and DOM manipulation, bundled with Webpack.

This project was developed as part of The Odin Project's JavaScript Curriculum.

🚀 About the Project
The primary goal of this project is to practice creating and manipulating DOM elements using JavaScript instead of hardcoding HTML content. Apart from a minimal HTML skeleton, the entire user interface—including the homepage, menu, and contact tabs—is generated dynamically through JavaScript modules.

Key Features
Dynamic DOM Manipulation: HTML content is generated and injected into the DOM purely through JavaScript modules.

Tab-Based Navigation: Smooth tab-switching logic allows users to navigate between the Home, Menu, and Contact pages without triggering a full page reload.

Modular JavaScript (ES6 Modules): Each section of the website resides in its own isolated module, promoting clean code organization and separation of concerns.

Asset Bundling with Webpack: JavaScript modules, HTML templates, and CSS stylesheets are bundled efficiently using Webpack.

🛠️ Built With
JavaScript (ES6+)

HTML5 & CSS3

Webpack & Webpack Dev Server

Git & GitHub Pages

💻 Getting Started
To run this project locally, follow these steps:

Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repository:

Bash
git clone https://github.com/your-username/restaurant-page.git
cd restaurant-page
Install dependencies:

Bash
npm install
Start the development server:

Bash
npx webpack serve
Open http://localhost:8080 in your browser to view the application live.

Building for Production
To build the project files into the dist folder:

Bash
npx webpack
