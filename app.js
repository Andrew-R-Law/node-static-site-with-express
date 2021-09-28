
const express = require('express');
const routes = require('./routes');
const errorHandlers = require('./errorHandlers');
const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));


//App uses routes for home page, about me, and project pages.
app.use(routes);

//App calls error handler functions.
app.use(errorHandlers.fourOhFour);
app.use(errorHandlers.globalError);


app.listen(3000, () => {
    console.log('The app is running on localhost:3000.')
})