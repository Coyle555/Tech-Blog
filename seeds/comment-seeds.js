const { Comment } = require('../models');

const commentData = [
    {
        user_id: 890,
        post_id: 1,
        comment_text: "Not a huge fan."
    },
    {
        user_id: 474,
        post_id: 2,
        comment_text: "Love this post."
    },
    {
        user_id: 2345,
        post_id: 3,
        comment_text: "Whoa! Thank you!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;