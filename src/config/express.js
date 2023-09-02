const express = require("express");
const cors = require("cors");
const responseHandler = require('./../app/common/handlers/response.handler')
const config = require('./env/config');
const appRoutes = require("../app/routes/index");

module.exports = () => {
    const app = express();
    app.use(express.json({ extended: false }))
    app.use(cors());
    app.use(express.static('./app'));
    app.use(responseHandler());

    app.use("/", appRoutes);

    const PORT = config.port ? config.port : process.env.PORT
    app.get('/', (req, res) => { return res.status(200).send( `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AngleView - Home</title>
        <style>
            /* Inline CSS styles */
            body {
                font-family: Arial, sans-serif;
                background-color: #133337;
                margin: 0;
                padding: 0;
            }
    
            header {
                background-color: #333;
                color: #fff;
                text-align: center;
                padding: 20px;
            }
    
            h1 {
                font-size: 36px;
            }
    
            .navbar {
                background-color: #333;
                color: #fff;
                overflow: hidden;
            }
    
            .navbar a {
                float: left;
                font-size: 16px;
                color: #fff;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
    
            .navbar a:hover {
                background-color: #ddd;
                color: #333;
            }
    
            .container {
                max-width: 760px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .slider {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 400px;
            }
    
            .slider img {
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
            }
    
            footer {
                background-color: #333;
                color: #fff;
                text-align: center;
                padding: 20px 0;
            }
    
            .social-icons {
                margin-top: 10px;
            }
    
            .social-icons a {
                color: #fff;
                font-size: 24px;
                margin: 0 10px;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Antino Labs India Pvt Ltd.</h1>
            <p>Your Vision, Our Perspective</p>
        </header>
    
        <div class="navbar">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
            <a href="#login">Login</a>
            <a href="#signup">Sign In</a>
        </div>
    
        <div class="slider">
            <img src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Image 1">
            <img src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Image 2">
            <img src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400">
        </div>
    
        <footer>
            <div class="social-icons">
                <a href="#" target="_blank">Facebook</a>
                <a href="#" target="_blank">Twitter</a>
                <a href="#" target="_blank">LinkedIn</a>
                <a href="#" target="_blank">Instagram</a>
            </div>
            <p>&copy; 2023 Md Shams Firoz. All rights reserved.</p>
        </footer>
    </body>
    </html>
    
    `) })

    app.use((req, res, next) => {
        return res.error.NotFound('Requested Route [ ' + req.url + ' ] Not found.');
    })

    app.use(function (err, req, res, next) {
        console.error(err);
        return res.error.ServerError('Internal Server Error', err);
    });

    return app;
}



