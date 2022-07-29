const express = require('express')
const db = require('../db');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10

router.post('/api/signUp', (req, res, next) => {
    const param = [req.body.id, req.body.password, req.body.name];
    var sql = 'INSERT INTO (`id`,`pw`,`name`) VALUES (?,?,?)';

    bcrypt.hash(param[1], saltRounds, (err, hash) => {
        param[1] = hash;
        db.query(sql, param, (err, rows, fileds) => {
            if (err) throw err;
        });
    });
    console.log(req.body)

    res.redirect('/')
    res.end()
})