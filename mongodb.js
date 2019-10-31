//crud create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

//we can destruct to
// const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    db.collection('tasks').updateMany({ status: "not completed" }, {
        $set: {
            status: "completed"
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => { console.log(error) })
})
