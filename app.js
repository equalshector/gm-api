express = require('express'),
app = express(),
router = express.Router(),
pgp = require('pg-promise')(/*initialization options*/),
dbpgp = pgp('postgres://root:password@localhost:5432/themg')

//***** BASIC ROUTES
    var index = require('./app/js/routes/index.js')
        app.use('/', index)

    var users = require('./app/js/routes/users.js')
        app.use('/users', users)

//***** GENERIC ERRORS
    app.use(function(req, res, next) {
        res.status(404).send('Sorry cant find that!')
    })

    app.use(function(err, req, res, next) {
        console.error(err.stack)
        res.status(500).send(err.stack)
    })

//***** START THE SERVER
    app.listen(8081, function () {
        console.log('Example app listening on port 8081!')
    })