const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory to where your .ejs files are located
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Example route to render the index.ejs file when someone visits the homepage
app.get('/', (req, res) => {
    res.render('index');  // This will look for 'views/index.ejs'
});

// Set up the server to listen on the specified port
const port = process.env.PORT || 3000;  // Default to port 3000 if no environment variable is set
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
