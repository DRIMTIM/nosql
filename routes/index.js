var express = require('express');
var couchdb = require('../persistence/couchPersistence');
var router = express.Router();

router.get('/', function (req, res, next) {
    couchdb.listDatabases(function (error, body, header) {
        res.render('index', {databases: body});
    });

});

module.exports = router;
