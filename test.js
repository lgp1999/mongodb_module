var mongodb = require('./routes/mongodb_module')

mongodb.config.url = 'mongodb://127.0.0.1:27017'                     //可以更改数据库地址

function insertOne() {
    mongodb.run.insertOne('lgp', 'module', {"result": "success!"}, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data);
        }
    })
}

function insertMany() {
    mongodb.run.insertMany('lgp', 'module', [{"result": "s"}, {"result": "a"}, {"result": "v"}], function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data);
        }
    })
}

function removeOne() {
    mongodb.run.removeOne('lgp', 'module', {"result": "a"}, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data);
        }
    })
}

function removeMany() {
    mongodb.run.removeMany('lgp', 'module', {"result": "success!"}, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data);
        }
    })
}

function update() {
    mongodb.run.update('lgp', 'module', {"name": "lgp"}, {$set: {"name": "update!"}}, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data);
        }
    })
}

function find() {
    mongodb.run.find('lgp', 'module', '', 10, '', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data);
        }
    })
}

find();

