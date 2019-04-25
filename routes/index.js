const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Request for home recieved')
    res.render('index')
})

router.get('/artists', (req, res) => {
    console.log('Request for artists page recieved')
    res.render('artists')
})

router.get('/aftercare', (req, res) => {
    console.log('Request for aftercare page recieved')
    res.render('aftercare')
})

router.get('/faq', (req, res) => {
    console.log('Request for faq page recieved')
    res.render('faq')
})

router.get('/old', (req, res) => {
    console.log('Request for old page recieved')
    res.render('old')
})

module.exports = router
