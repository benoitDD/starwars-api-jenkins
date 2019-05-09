//db.getCollectionInfos({name:"orders"}) TO DO***********************************

var MongoClient = require("mongodb").MongoClient

var client = MongoClient(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@starwars-qkig8.mongodb.net?retryWrites=true`, { useNewUrlParser: true })

client.connect(function (err) {
    if (err) {
        return console.log("error to connect to the database:", err)
    }
    const db = client.db('starwars')
    //Drop collections
    Promise.all([
        db.collection('objects').drop().catch(() => {}),
        db.collection('users').drop().catch(() => {})
    ])
    .then(() => {
        return Promise.all([
            //Creates Collections
            db.createCollection('objects', {
                validator: {
                   $jsonSchema: {
                      bsonType: "object",
                      required: [ "idExternal", "type" ],
                      properties: {
                         idExternal: {
                            bsonType: "string",
                            description: "must be a string and is required"
                         },
                         type: {
                            enum: ['Person', 'Planet', 'Species', 'Starship', 'Vehicle'],
                            description: "a enum and is required"
                         },
                         imagesHeader: {
                            bsonType: "array",
                            items: {
                                bsonType: "object",
                                required: ["filename", "title" ],
                                properties: {
                                    filename: {
                                        bsonType: "string",
                                        description: "must be a string and is required"
                                    },
                                    title: {
                                        bsonType: "string",
                                        description: "must be a string and is required"
                                    },
                                    description: {
                                        bsonType: "string",
                                        description: "must be a string"
                                    },
                                }
                            }
                         }
                      }
                   }
                }
            }),
            db.createCollection('users', {
                validator: {
                   $jsonSchema: {
                      bsonType: "object",
                      required: [ "login", "password" ],
                      properties: {
                        login: {
                            bsonType: "string",
                            description: "must be a string and is required"
                         },
                         password: {
                            bsonType: "string",
                            description: "must be a string and is required"
                         }
                      }
                   }
                }
            }),
        ])
    })
    .then(() => {
        //Create Indexes
        return Promise.all([
            db.collection('objects').createIndexes( [
                { key: {"idExternal": 1 }, unique: true},
                { key: {"imagesHeader.filename": 1 }, unique: true, sparse:true}
            ]),
            db.collection('users').createIndex( { "login": 1 }, { unique: true } )
        ])
    })
    .then(() => {
        console.log('Database created')
        client.close()
    })
})