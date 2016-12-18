// theboard, this is the place where the
router.get('/', function (req, res) {

    dbpgp.one('SELECT $1 AS value', 123)
        .then(function (data) {
            res.send({status: 'success', data: data.value})
        })
        .catch(function (error) {
            res.send({status: 'error', data: error})
        })
})

// define the about route
router.get('/recruit', function (req, res) {
    res.render('main/index', { title: 'The Monster Game', message: 'recruits' })
})

module.exports = router