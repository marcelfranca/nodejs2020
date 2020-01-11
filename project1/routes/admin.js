const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("In another the Middleware");
    // res.send('<form action="/product" method="post"><input type="text" name="tittle">' +
    //     '<button type="submit">Add Product</button></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/product', (req, res, nex) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
