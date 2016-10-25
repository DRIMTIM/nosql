var express = require('express');
var router = express.Router();
var couchdb = require('../persistence/couchPersistence');

router.get('/', function (req, res, next) {
    couchdb.listUsers(function (error, body, header) {
        res.render('users', {users: body});
    });
});

router.get('/add', function (req, res, next) {
    var users = [
        {
            name: "Roberto",
            surname: "Robertson"
        },
        {
            name: "David",
            surname: "Davidson"
        },
        {
            name: "Dilma",
            surname: "Rouseff"
        }
    ];
    couchdb.addUsers(users, function (error, body, header) {
        res.send('Usuarios agregados!');
    });
});


module.exports = router;
