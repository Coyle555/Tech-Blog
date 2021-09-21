const { User } = require('../models');

const userData = [
    {
        username: "coyle",
        twitter: "coyle55",
        github: "Coyle555",
        email: "coyle@gmail.com",
        password: "12345"
    },
    {
        username: "tommy",
        twitter: "tommyGun",
        github: "eubanktr",
        email: "tommy@gmail.com",
        password: "12345"
    },
    {
        username: "ren",
        twitter: "rennyBoy",
        github: "ren5",
        email: "ren@gmail.com",
        password: "12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;