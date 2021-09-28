//404 Handler

function fourOhFour (req, res, next) {
    const err = new Error();
    err.status = 404;
    err.message = 'Oops, it looks like the route requested does not exist.';
    console.log(err.message, err.status);
    next(err);
}

// Global Handler
function globalError (err, req, res, next) {
    if (!err.status || !err.message) {
        err.status = 500;
        err.message = 'Oh no, it looks like something has gone wrong on the server side.';
        console.log(err.message, err.status);
    }
    res.status(err.status).send(err.message);
}

module.exports = {fourOhFour, globalError};