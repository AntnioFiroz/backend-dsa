const express = require("express");
const cors = require("cors");
const responseHandler = require('./../app/common/handlers/response.handler')
const config = require('./env/config');
const path = require('path');

module.exports = () => {
    const app = express();
    app.use(express.json({ extended: false }))
    app.use(cors());
    app.use(express.static('./app'));
    app.use(responseHandler());

    // You need to import all of your routes here
    // Import all routes
    require('../app/modules/post/post.routes')(app);
    require('./../app/modules/user/user.routes')(app);


    const PORT = config.port ? config.port : process.env.PORT
    // app.get('/', (req, res) => { return res.status(200).send('Server is running on Port - ' + PORT) })
    app.get('/', (req, res) => {
        const indexPath = path.join(__dirname, 'index.html');
        res.sendFile(indexPath);
      });
      

    // 404 - Not Found
    app.use((req, res, next) => {
        return res.error.NotFound('Requested Route [ ' + req.url + ' ] Not found.');
    })

    // 500 - Any server error
    app.use(function (err, req, res, next) {
        console.error(err);
        return res.error.ServerError('Internal Server Error', err);
    });

    return app;
}
