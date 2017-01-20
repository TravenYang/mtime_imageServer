/**
 * Created by Traven on 2017/1/15.
 */
'use strict';
let fs = require('co-fs');
let mysql = require('../models/mysql');
module.exports = function (app) {
    app.get('/mtime/list',function*(){
        try{
            let sortSql = `SELECT * FROM commet;`;
            let r = yield mysql.query(sortSql);
            this.body = r;
            return;
        }catch(e){
            console.log(e.toString());
        }

    });
    app.get('/image/:image',function*(){
        try{
            let me = this;
            let data = yield fs.readFile('./static/image/101010.jpg','binary');
            this.type = 'image/jpeg';
            this.body = data;
            console.log(data);


        }catch(e){
            console.log(e.toString());
        }
    });
};