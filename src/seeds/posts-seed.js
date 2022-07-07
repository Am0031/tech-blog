const { Post } = require("../models");

const postsData = [
  {
    title: "The Five Top Reasons to Use JavaScript",
    postText:
      "Reason #1: JavaScript is very easy to learn \nReason #2: JavaScript is used everywhere…web browser (Angular, React), server-side (Node), mobile, desktop, games, Internet of Things, robotics, virtual reality, etc. \nReason #3: Node is super popular. Proof: there are over 30,000 NPM packages available! \nReason #4: There are lots of high-paying jobs for JavaScript developers.\nReason #5: JavaScript is an incredibly expressive and powerful language.",
    userId: 1,
  },
  {
    title: "How I could learn Javascript",
    postText:
      "I could use these online platforms : freecodecamp.org or Hackr.io. I hear they are pretty good. ",
    userId: 2,
  },
  {
    title: "I'm struggling with React",
    postText:
      "Can anyone out there direct me to a good resource or a good tutor? ",
    userId: 3,
  },
  {
    title: "Bootstrap is great!",
    postText:
      "I've been able to build my website so easily using Bootstrap. Check them out here: website1.com, website2.com, website3.com ",
    userId: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;
