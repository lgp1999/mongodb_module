# mongodb_module
这是一个模块化的操作mongodb数据库的模板，使用实例可见test.js文件。

## 使用方式

#### 1、引入。

```javascript
var mongodb = require('./mongodb_module.js')
```

#### 2、配置。

```javascript
mongodb.config.url = 'mongodb://127.0.0.1:27017' //数据库地址默为'mongodb://127.0.0.1:27017'
```

#### 3、使用。

**模板：**
```javascript
insertOne: function (database, collection, data, callback) {     //增加一条数据
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
```
**参数：**
 - database:数据库名称；
 - collection：集合名称；
 - data：增加的数据；
 - callback：回调函数
 
**回调函数中的参数：**
 - err：发生错误时返回的值
 - data：执行成功时返回
 
**具体使用：**    
```javascript
mongodb.run.insertOne('lgp', 'module', {"result": "success!"}, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data);
        }
    })
```
**其他方法参数：**
 - whereData：更新方法中，查找要更新的对象
 - changeData ：更新方法中，要更新的内容
 - limit：查找方法中，对数据数量的限制，默认为：20
 - sort：查找方法中，查找数据后的排序方式，默认为：' '
 
**目前支持的方法：insertOne、insertMany、removeOne、removeMany、update、find。**
**可根据自己的需要进行增加。**
