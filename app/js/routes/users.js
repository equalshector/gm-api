// theboard, this is the place where the
router.post('/create', function (req, res) {
    res.send('DATA:'+ req.param('username'))
})

module.exports = router