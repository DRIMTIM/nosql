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

var addUsers = function (users, callback) {
    if(users) {
        tallerNosql.bulk(users, "users" ,callback);
    }
};

var listUsers = function (callback) {
    tallerNosql.list({type: "user", include_docs : true}, callback);
};

module.exports = {
    listDatabases: listDatabases,
    listDocuments : listDocuments,
    addUsers: addUsers,
    listUsers: listUsers
};