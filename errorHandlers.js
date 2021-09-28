//404 Handler

function fourOhFour (req, res, next) {
    console.log('404 Error');

    const err = new Error('err');
    err.status = 404;
    err.message = 'Oops, it looks like the requested route does not exist. Try another route.';
    next(err);
}

//Global handler

function globalError (err, req, res, next) {
    console.log('Global error.');
    err.message = err.message || 'Oh noes, it looks like something went wrong on the server. Try checking back soon.';
    err.status = err.status || 500;
    console.log(err.message);
    console.log(err.status);
    res.send(err.message);
}

module.exports = {fourOhFour, globalError};