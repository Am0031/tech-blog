const { Comment } = require("../models");

const commentsData = [
  {
    commentText: "Yes, I agree with you, Javascript has many advantages!",
    postId: 1,
    userId: 3,
  },
  {
    commentText: "yes, freecodecamp is really good!",
    postId: 2,
    userId: 1,
  },
  {
    commentText: "you can also use Udemy, they cover a wide variety of topics",
    postId: 2,
    userId: 1,
  },
  {
    commentText:
      "I learnt with codecademy and it was very good. I recommend it!",
    postId: 2,
    userId: 3,
  },
  {
    commentText: "maybe they can help at cloudacademy.com ",
    postId: 3,
    userId: 1,
  },
];

const seedComments = () => {
  Comment.bulkCreate(commentsData);
  console.log("Successfully seeded comments");
};

module.exports = seedComments;
