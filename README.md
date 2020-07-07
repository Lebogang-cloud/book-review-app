# book-review-app
# book-review-app
App development

About

The book review app is a demo application which enables users to register and have a profile, where they can
    add, edit and delete reviews. 
    
    The user has to include the following information about the book:

        * Title
        * Author
        * Price
        * Rating
        * Review



Create React App is divided into two packages:

    1. create-react-app is a global command-line utility that you use to create new projects.
    2. react-scripts is a development dependency in the generated projects (including this one).

You almost never need to update create-react-app itself: it delegates all the setup to react-scripts.

To find the version you’re currently on (check package.json in this folder if you’re not sure), 

Folder Structure

Available Scripts

In the project directory, you can run:

npm start

    Runs the app in the development mode.
    Open http://localhost:3000 to view it in the browser.

    The page will reload if you make edits.
    You will also see any lint errors in the console.

npm test

    Launches the test runner in the interactive watch mode.
    See the section about running tests for more information.

npm run build

    Builds the app for production to the build folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.
    Your app is ready to be deployed!

    See the section about deployment for more information.

npm run dev

Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency.

    npm install --save react-router
    npm install --save bcrypt
    npm install --save body-parser
    npm install --save concurrently
    npm install --save cookie-parser
    npm install --save express
    npm install --save jsonwebtoken
    npm install --save moment-js
    npm install --save mongoose

Integrating with an API Backend

App is integrated with an API backend, using fetch() to access it