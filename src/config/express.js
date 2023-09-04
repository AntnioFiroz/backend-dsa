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
    <title>AngleView Design Firm</title>
    <style>
        /* Navbar */
        .navbar {
            background-color: lightblue;
            padding: 10px;
        }
        
        /* Slider Container */
        .slider-container {
            text-align: center;
            margin-top: 20px;
        }

        /* Slider Images (customize as needed) */
        .slider-img {
            width: 100%;
            max-width: 800px;
            height: auto;
        }

        /* Client Section */
        .client-section {
            text-align: center;
            margin-top: 30px;
        }

        /* Footer */
        .footer {
            background-color: lightblue;
            padding: 20px;
            text-align: center;
        }

        /* Social Media Links (customize as needed) */
        .social-media {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <div class="navbar">
        <h1>AngleView Design Firm</h1>
    </div>

    <!-- Slider Container -->
    <div class="slider-container">
        <!-- Image Slider (customize with your images) -->
        <img class="slider-img" src="image1.jpg" alt="Image 1">
        <img class="slider-img" src="image2.jpg" alt="Image 2">
        <img class="slider-img" src="image3.jpg" alt="Image 3">
    </div>

    <!-- Client Section -->
    <div class="client-section">
        <h2>Our Clients</h2>
        <!-- Add client content here -->
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>&copy; 2023 AngleView Design Firm</p>
        <div class="social-media">
            <!-- Add your social media links here -->
            <a href="#">Facebook</a> |
            <a href="#">Twitter</a> |
            <a href="#">Instagram</a>
        </div>
    </div>
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



