const express = require('express');
const data = require('./data.json');

const app = express();
app.set('view engine', 'pug');

app.use('/static', express.static('public'));



app.get('/', (req, res) => {
    res.render('index', {data: data.projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    res.render('project', {data: data.projects[id]});
});


app.listen(3000, () => {
    console.log('The app is running on localhost:3000.')
})