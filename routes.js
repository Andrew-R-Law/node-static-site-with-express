const express = require('express');
const router = express.Router();
const data = require('./data.json');


router.get('/', (req, res) => {
    res.render('index', {data: data.projects});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/projects/:id', (req, res, next) => {
    const id = req.params.id;
    res.render('project', {data: data.projects[id]});
});

module.exports = router;