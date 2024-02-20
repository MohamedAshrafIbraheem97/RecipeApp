# Welcome to Recipe App! [Working Demo](https://recipe-app-five-lime.vercel.app/recipes)

Hey there! Thanks for checking out my Angular project. Below, you'll find all the essential information to get started with the project.

## Project Overview
This project is a dynamic web application built using Angular, aimed at validating my knowlegde on angular. also it uses the spoonacular API to get the recipes

## Features
- **Feature 1:** list a random recipes
- **Feature 2:** show details of a recipe when clicking on the recipe name on the recipe card
- **Feature 3:** add a recipe to a favorite 
- **Feature 4:** search for a recipe (just write the name and hit enter and the details of that recipe will appear) 
- **Feature 5:** hence we get a random recipe so if you liked a recipe and refreshed the page you will not find it on the recipe tab
- **Feature 6:** show all favorited recipes on the favorites tab 
- **Feature 7:** save all favorite recipe on the local storage and fetch them from there for persistency
- **Feature 8:** it's also supports all kind of screens (responsive design)

## Technologies Used
![Angular](https://img.shields.io/badge/-Angular-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap)
![Git](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)
![Sass](https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel)
![Spoonacular](https://img.shields.io/badge/-Spoonacular-FF7F50?style=flat-square&logo=spoonacular&logoColor=white)

- **Angular:** Frontend framework for building robust and scalable web applications
- **TypeScript:** The primary language used in Angular development
- **HTML/SCSS:** For structuring and styling the application
- **Bootstrap:** For responsive and mobile-first design
- **Vercel:** For deployment
- **Git/Github:** For source control
- **Spoonacular:** For API

## Used Folder Structure
1. core: contains endpoints configrations and interceptors
2. recipe: contains components, models and service
3. favorite-recipe: contains a component for listing all favorite recipes
4. shared: contains shared components like recipe card.

## why this structure
1. I belive in lazy loading so i tried to make the minimal modules i can
2. I used local storage to store favorite recipes this is why i tried to put the methods on the recipe service so all related data on one single file and to change on one single place when adding firestore
3. Bootstrap for easier design and pre-made components
4. I used end-points constants file so we might want to add more links for mockup server for example

## Getting Started
To get up and running with this Angular project, follow these simple steps:

1. **Clone the Repository:** `git clone [https://github.com/MohamedAshrafIbraheem97/RecipeApp.git]`
2. **Install Dependencies:** Run `npm install` in the project directory
3. **Start the Development Server:** Run `ng serve` or `npm start`
4. **Open Your Browser:** Navigate to `http://localhost:4200` to view the project


## Acknowledgements
A big thank you to the Angular team, spoonacular and the open-source community for their fantastic work and support!

---

If you have any questions or suggestions, feel free to reach out. Happy coding with Angular! 🅰️🚀

Cheers,
Mohamed
