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
    const projectId = req.params.id;
    if (data.projects[projectId]) {
        res.render('project', {data: data.projects[projectId]});
    } else {
        const err = new Error();
        err.status = 404;
        err.message = 'Oops, looks like the project you are requesting does not exist (yet).';
        console.log(err.message, err.status);
        next(err);
    }
});

module.exports = router;