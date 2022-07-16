const { User } = require("../models");

const usersData = [
  {
    username: "Tobby410",
    email: "tobby@example.org",
    password: "password123",
  },
  {
    username: "JohnnyCash",
    email: "johnny@example.org",
    password: "password456",
  },
  {
    username: "Jane-Doe",
    email: "janedoe@example.org",
    password: "password789",
  },
  {
    username: "maxxx",
    email: "maxblack@example.org",
    password: "passwordxxx",
  },
  {
    username: "bob45",
    email: "bobsmith@example.org",
    password: "password111",
  },
];

const seedUsers = async () => {
  const promises = usersData.map((user) => User.create(user));
  await Promise.all(promises);
  console.log("Successfully seeded users");
};

module.exports = seedUsers;
