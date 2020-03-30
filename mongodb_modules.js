var mongodb = {
    config: {
        url: 'mongodb://127.0.0.1:27017',                           //数据库地址
        MongoClient: require("mongodb").MongoClient            //引入mongodb模块
    },
    run: {
        insertOne: function (database, collection, data, callback) {                  //增加一条数据
            connect(function (error, dbs) {
                if (error) {
                    return 'err'
                } else {
                    var db = dbs.db(database);
                    db.collection(collection).insertOne(data, function (err, data) {
                        if (callback) {
                            callback(err, data)

                        }
                        dbs.close()
                    })
                }
            })
        },
        insertMany: function (database, collection, data, callback) {                  //增肌多条数据
            connect(function (error, dbs) {
                if (error) {
                    return 'err'
                } else {
                    var db = dbs.db(database);
                    db.collection(collection).insertMany(data, function (err, data) {
                        if (callback) {
                            callback(err, data)
                        }
                        dbs.close()
                    })
                }
            })
        },
        removeOne: function (database, collection, data, callback) {                  //删除一条数据
            connect(function (error, dbs) {
                if (error) {
                    return 'err'
                } else {
                    var db = dbs.db(database);
                    db.collection(collection).removeOne(data, function (err, data) {
                        if (callback) {
                            callback(err, data)
                        }
                        dbs.close()
                    })
                }
            })
        },
        removeMany: function (database, collection, data, callback) {                  //删除多条数据
            connect(function (error, dbs) {
                if (error) {
                    return 'err'
                } else {
                    var db = dbs.db(database);
                    db.collection(collection).removeMany(data, function (err, data) {
                        if (callback) {
                            callback(err, data)
                        }
                        dbs.close()
                    })
                }
            })
        },
        update: function (database, collection, whereData, changeData, callback) {                  //更新数据
            connect(function (error, dbs) {
                if (error) {
                    return 'err'
                } else {
                    var db = dbs.db(database);
                    db.collection(collection).updateOne(whereData, changeData, function (err, data) {
                        if (callback) {
                            callback(err, data)
                        }
                        dbs.close()
                    })
                }
            })
        },
        find: function (database, collection, data, limit, sort, callback) {                  //查找数据
            connect(function (error, dbs) {
                if (error) {
                    return 'err'
                } else {
                    var db = dbs.db(database);
                    db.collection(collection).find(data).limit(limit ? limit : 20).sort(sort).toArray(function (err, data) {
                        if (callback) {
                            callback(err, data)
                        }
                        dbs.close()
                    })
                }
            })
        }
    }
}

//连接数据库函数
function connect(callback) {
    mongodb.config.MongoClient.connect(mongodb.config.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (error, dbs) {                    //         { useUnifiedTopology: false }
        //console.log(dbs.db)
        if (callback) {
            callback(error, dbs)
        }
    });
}


module.exports = mongodb;
