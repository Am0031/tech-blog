const { Comment } = require("../models");

const commentsData = [
  {
    commentText: "Yes, I agree with you, Javascript has many advantages!",
    userId: 3,
    postId: 1,
  },
  {
    commentText: "yes, freecodecamp is really good!",
    userId: 1,
    postId: 2,
  },
  {
    commentText: "you can also use Udemy, they cover a wide variety of topics",
    userId: 1,
    postId: 2,
  },
  {
    commentText:
      "I learnt with codecademy and it was very good. I recommend it!",
    userId: 3,
    postId: 2,
  },
  {
    commentText: "maybe they can help at cloudacademy.com ",
    userId: 1,
    postId: 3,
  },
  {
    commentText: "very useful information!",
    userId: 4,
    postId: 5,
  },
  {
    commentText: "very clear and informative",
    userId: 2,
    postId: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;
