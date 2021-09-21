const { Post } = require('../models');

const postData = [
    {
        title: "Weather app has been finalized.",
        post_content: "A simple app to check the weather in any city.",
        user_id: 1
    },
    {
        title: "Facebook shuts down for good!",
        post_content: "Zuck decided to sell and call it quits!",
        user_id: 2
    },
    {
        title: "NeuralLink is live.",
        post_content: "Musk has finally done it!",
        user_id: 3

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;