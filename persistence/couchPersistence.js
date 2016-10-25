var nano = require('nano')({
  url : 'http://localhost:5984/',
  username: 'admin',
  userpass: 'admin',
  callback: console.log
});

//usa la base de datos taller_nosql
var tallerNosql = nano.db.use('taller_nosql');

var listDatabases = function (callback) {
    return nano.db.list(callback);
};

var listDocuments = function (callback) {
    return tallerNosql.list(callback);
};

var addUsers = function (users) {
    if(users && users.length > 0) {
        users.forEach(function (user) {
            tallerNosql.insert(user, function (error, body, header) {
                if(error)
                    console.log(error);
            });
        });
    }
};

var listUsers = function (callback) {
    tallerNosql.get('users', callback);
};

module.exports = {
    listDatabases: listDatabases,
    listDocuments : listDocuments,
    addUsers: addUsers,
    listUsers: listUsers
};