const express = require('express');

const routes = express.Router();

const TweetController = require('../controllers/TweetController')
const LikeController = require('../controllers/LikeController')

routes.get('/', (req, res) => res.json({
    status: 'Twitter API Working !'
}));

routes.get("/tweets", TweetController.index);
routes.get('/tweets/:id', TweetController.show);
routes.post("/tweets", TweetController.store);

routes.post("/likes/:id", LikeController.store);

module.exports = routes;