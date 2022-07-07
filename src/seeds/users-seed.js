const { User } = require("../models");

const usersData = [
  {
    userName: "Tobby410",
    email: "tobby@example.org",
    password: "password123",
  },
  {
    userName: "JohnnyCash",
    email: "johnny@example.org",
    password: "password456",
  },
  {
    userName: "Jane-Doe",
    email: "janedoe@example.org",
    password: "password789",
  },
  {
    userName: "maxxx",
    email: "maxblack@example.org",
    password: "passwordxxx",
  },
];

const seedUsers = async () => {
  const promises = usersData.map((user) => User.create(user));
  await Promise.all(promises);
  console.log("Successfully seeded users");
};

module.exports = seedUsers;
