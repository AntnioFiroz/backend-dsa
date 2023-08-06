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
    app.get('/', (req, res) => { return res.status(200).send(`Server is running on Port ${PORT}
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DevOps UpScale Program</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
    
        .name {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }
    
        .guide {
          font-size: 18px;
          color: #666;
          margin-bottom: 20px;
        }
    
        .company {
          font-size: 14px;
          color: #999;
        }
    
        .logo-container {
          width: 200px; /* Adjust the width as needed */
          height: 200px; /* Adjust the height as needed */
          margin-bottom: 20px;
        }
    
        .logo-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
    
        .footer {
          font-size: 12px;
          color: #0f0505;
          margin-top: 20px;
          text-align: center;
        }
    
        .footer span {
          margin: 0 5px;
        }
    
        .footer a {
          color: #131111;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="name">Node Js Project Deployment</div>
      <div class="guide">
        <p>Project deploying  with Jenkins, Docker, and EC2</p>
      </div>
      <div class="logo-container">
        <img src="https://virality.s3.ap-south-1.amazonaws.com/profile/1234/imageda1d3e50-7b09-4dd4-bce9-44c0577ea827devops.jpg" alt="Logo">
      </div>
      <div class="company">By Md Shams Firoz</div>
    
      <div class="footer">
        <span>DevOps Program Upscale</span>
        <span>|</span>
        <span>Guide By: Divyvam</span>
        <span>|</span>
        <span>Mentor By: Sagar Kumar</span>
        <span>|</span>
        <span>Deployment by <a href="https://www.example.com" target="_blank">Md Shams Firoz</a></span>
        <span>|</span>
        <span>&copy; 2023 Antino Lab Upscale-Program. All rights reserved.</span>
      </div>
    </body>
    </html>  
    `) })
  
      

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
