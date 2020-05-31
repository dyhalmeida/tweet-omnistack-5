const express = require('express');

const routes = express.Router();

const TweetController = require('../controllers/TweetController')
routes.get('/', (req, res) => res.json({
    status: 'Twitter API Working !'
}));

routes.post("/tweets", TweetController.store);
module.exports = routes;