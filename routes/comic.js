var express = require('express');
var router = express.Router();
var connect_mongo = require('../modules/con_mongo')
var api_handler = require("../modules/api")
/* GET users listing. */


router.get('/getComics', function (req, res, next) {
    let params = req.query
    api_handler.getComics(params, res)
});

router.get('/getComicsInList', function (req, res, next) {
    let params = req.query
    api_handler.getComicsInList(params, res)
});

router.get('/addComic', function (req, res, next) {
    let params = req.query
    api_handler.addComic(params, res)
})

router.get('/reduceComic', function (req, res, next) {
    let params = req.query
    api_handler.reduceComic(params, res)
})

router.get('/removeComic', function (req, res, next) {
    let params = req.query
    api_handler.removeComic(params, res)
})
module.exports = router;
