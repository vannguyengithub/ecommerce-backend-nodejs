'use strict';

const mongoose = require('mongoose');
const { db: { host, name, port, password} } = require('../configs/config.mongdb');

const connectString = `mongodb+srv://node-database:${password}@cluster0.2ja607x.mongodb.net/${name}`
const { countConnect } = require('../helpers/check.connect');

class Database {
    constructor() {
        this.connect();
    }

    //connect
    connect(type = 'mongodb') {
        if(1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }

        mongoose.connect(connectString, {
            maxPoolSize: 50
        }).then(_=> {
            console.log(`Connected MongoDB Success Pro`, countConnect());
        })
        .catch(err => console.log(`Error Connect`))
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;