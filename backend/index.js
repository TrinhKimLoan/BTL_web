const express = require('express');
const bodyParser = require('body-parser');
const storiesRoutes = require('./src/routes/storiesRoute');

// const port = process.env.PORT || 3000;
const port = 3000;
const genresRoutes = require('./src/routes/genresRoute')
const chaptersRoute = require('./src/routes/chaptersRoute'); // Import route
const storyGenresRoute = require('./src/routes/storyGenresRoute')



const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', storiesRoutes);
app.use('/',chaptersRoute)
app.use('/', genresRoutes) 
app.use('/',storyGenresRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


