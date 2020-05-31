const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbmongo = require('./src/connection/TweetConnection');
const app = express();
const server = require('http').Server(app);
const routes = require('./src/routes/TweetRoute');

require('dotenv').config();
require('colors');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

(async () => {
    try {
        await mongoose.connect(dbmongo.url, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Successfully connected'.green)
    } catch (error) {
        console.log(error, 'Failed to connect with mongodb'.red)
        process.exit()
    }
})()
app.use(cors());
app.use(express.json());
app.use(routes);

app.get('*', (req, res) => {
    res.send({ Error: 'Page Not Found' });
});

server.listen(PORT, HOST, () => {
    console.log('\n' + `Twitter API Running http://localhost:${PORT}`.yellow, '\n');
});
