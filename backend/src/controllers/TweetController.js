const Tweet = require('../models/TweetModel');

module.exports = {

    async store(req, res) {
        const tweet = await Tweet.create(req.body);
        return res.json(tweet);
    },
};