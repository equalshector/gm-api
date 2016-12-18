// theboard, this is the place where the
router.post('/create', function (req, res) {

    dbpgp.one('INSERT into users (username, email, password, salt) VALUES($1, $2, $3, $4) returning id', 
    [req.param('username'), req.param('email'), req.param('password'), req.param('salt')])

        .then(function (data) {
            res.status(200).send({status: 'success', message: {id: data.id}})
        })
        .catch(function (error) {
            res.status(500).send({status: 'error', message: error})
        })

})

module.exports = router