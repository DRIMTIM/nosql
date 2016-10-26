var express = require('express');
var router = express.Router();
var couchdb = require('../persistence/couchPersistence');

router.get('/', function (req, res, next) {
    couchdb.listUsers(function (error, body, header) {
        res.render('users', {users: body.rows});
    });
});

router.get('/add', function (req, res, next) {
    var users = {
        "docs": [
            {
                name: "Roberto",
                surname: "Robertson",
                type: "user"
            },
            {
                name: "David",
                surname: "Davidson",
                type: "user"
            },
            {
                name: "Dilma",
                surname: "Rouseff",
                type: "user"
            }
        ]
    };
    couchdb.addUsers(users, function (error, body, header) {
        console.log(error);
        res.redirect('/users');
    });
});


module.exports = router;
