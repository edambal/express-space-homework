// DEPENDENCIES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');



// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
  app.set('view engine','ejs');
  const marsM = require('./models/marsMissions');
  const marsCtrl = require('./controller/marsController');

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

//Middleware
// app.use(bodyParser.urlencoded({extended:false}));

// // Custom Middleware
// app.use((req,res,next)=>{
//   const method = req.method;
//   const path = req.url;
//   const timestamp = new Date().toLocaleTimeString();
//   console.log(`${method} | ${path} | ${timestamp}`);
//   next(); // Allow request to move on to the next middleware in the chain
// });

// Basic route check

app.get('/', (req, res) => {
  // res.sendFile();
  // res.send('<h1>Welcome to Express Fruits</h1>');
  res.render('index');
});

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

app.use('/missions',marsCtrl);

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
