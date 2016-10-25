var nano = require('nano')({
  url : 'http://localhost:5984/',
  username: 'admin',
  userpass: 'admin',
  callback: console.log
});

//usa la base de datos taller_nosql
var db = nano.db.use('taller_nosql');

var listDatabases = function (callback) {
    return nano.db.list(callback);
};

var listDocuments = function (callback) {
    return db.list(callback);
};

var addUsers = function (users) {
    if(users && users.length > 0) {
        users.forEach(function (user) {
            db.insert(user, function (error, body, header) {
                if(error)
                    console.log(error);
            });
        });
    }
};

var listUsers = function (callback) {
    db.get('users', callback);
};

module.exports = {
    listDatabases: listDatabases,
    listDocuments : listDocuments,
    addUsers: addUsers,
    listUsers: listUsers
};