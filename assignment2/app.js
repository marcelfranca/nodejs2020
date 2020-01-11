const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First Middleware');
//     next();
// });
//
// app.use((req, res, next) => {
//     console.log('Second Middleware');
//     res.send('<p>Assignment Solved (Almost)</p>');
// });

app.use('/users', (req, res, next) => {
    console.log('/users Middleware');
    res.send('<p>/users Middelware</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ Middleware');
    res.send('<p>/ Middleware</p>');
});

app.listen(3000);
