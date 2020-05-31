const Tweet = require('../models/TweetModel');

module.exports = {

    async index(req, res) {
        const tweets = await Tweet.find({}).sort('-createdAt')
        return res.json(tweets);
    },

    async show(req, res) {
        const tweet = await Tweet.findById(req.params.id)
        return res.json(tweet);
    },

    async store(req, res) {
        const tweet = await Tweet.create(req.body);
        req.io.emit('tweet', tweet);
        return res.json(tweet);
    },

};