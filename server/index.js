const express = require('express');
const path = require('path')
const port = require('../port');
const db =require('./db')
const app = express();

db.connect();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/api',(req,res)=>{
    res.send('hi')
    // res.render('index',{title:'타이틀'});
})

const singUp = '/api/signUp';
app.post(singUp, (req, res) => {
    var sql = "SELECT * FROM users";
    conn.query(sql, (err, rows, fields) => {
        if (err) throw err;
        console.log(rows);
        res.send(rows);
    });
});

// app.post(singUp, (req, res) => {
//     var name = req.body.name;
//     var email = req.body.email;
//     var phone = req.body.phone;
//     var sql = "INSERT INTO customers (name,email,phone) VALUES (?,?,?)";

//     conn.query(sql, [name, email, phone], (err, result, fields) => {
//         if (err) throw err;

//         res.redirect('/customers/' + result.insertId);
//     });
// });

// app.get('/customers/:id/edit', (req, res) => {
//     var sql = 'SELECT * FROM customers';
//     conn.query(sql, (err, rows, fields) => {
//         var id = req.params.id;
//         if (id) {
//             var sql = 'SELECT * FROM customers WHERE id=?';
//             conn.query(sql, [id], (err, rows1, fields) => {
//                 if (err) throw err;

//                 res.render('edit', {
//                     customers: rows,
//                     customer: rows1[0]
//                 });
//             });
//         }
//     });
// });

// app.post('/customers/:id/edit', (req, res) => {
//     var sql = 'UPDATE customers SET name=?, email=?, phone=? WHERE id=?';
//     var name = req.body.name
//     var email = req.body.email
//     var phone = req.body.phone
//     var id = req.params.id

//     conn.query(sql,[name,email,phone,id],(err,rows,fields)=>{
//         if (err) throw err;

//         res.redirect('/customers/'+id);
//     })
// })

// app.get('/customers/:id/delete',(req,res)=>{
//     var sql = 'SELECT * FROM customers';
//     var id = req.params.id;
//     conn.query(sql,(err,rows,fields)=>{
//         var sql = 'SELECT * FROM customers WHERE id=?';
//         conn.query(sql,[id],(err,rows1,fileds1)=>{
//             if (err) throw err;

//             res.render('delete',{customers:rows,customer:rows1[0]});
//         })
//     })
// })

// app.post('/customers/:id/delete',(req,res)=>{
//     var id =req.params.id;
//     var sql = 'DELETE FROM customers WHERE id=?';
//     conn.query(sql,[id],(err,rows,fields)=>{
//         res.redirect('/customers')
//     })
// })

// app.get(['/customers', '/customers/:id'], (req, res) => {
//     var sql = "SELECT * FROM customers";
//     conn.query(sql, (err, rows, fields) => {
//         if (err) throw err;

//         var id = req.params.id
//         if (id) {
//             sql = 'SELECT * FROM customers WHERE id=?';
//             conn.query(sql, [id], (err, rows1, fields) => {
//                 if (err) throw err;

//                 res.render('view', {
//                     customers: rows,
//                     customer: rows1[0]
//                 })
//             })
//         } else {
//             res.render('view', {
//                 customers: rows
//             });
//         }
//     });
// });


app.listen(port, () => {
    console.log(`server start ${port}`)
})