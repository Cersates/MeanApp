// app/routes.js

var Product = require('./models/product');

module.exports = function (app) {

    // server routes ===========================================================

    app.get('/api/prod/', function (req, res) {
        // use mongoose to get all nerds in the database
        Product.find(function (err, products) {
            if (err)
                res.send(err);
            console.log('routes.js: app.get from db return ', products);
            res.send(products); // return all products in JSON format
        });
    });

    app.post('/api/prod/', function (req, res) {
        console.log('++routes.js: app.post some one try invoke adding product ',req.body.title);

        var newProduct = new Product({
            title: req.body.title
        });

        newProduct.save(function (err) {
            if (err) {
                console.log(err);
            }
            console.log("done!")
        })

    });

};