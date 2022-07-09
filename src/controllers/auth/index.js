const login = (req, res) => {
  console.log("req, resogin");
  return res.json({ message: "login" });
};
const signup = (req, res) => {
  console.log("req, resignup");
  return res.json({ message: "signup" });
};
const logout = (req, res) => {
  console.log("logout");
  return res.json({ message: "logout" });
};

module.exports = { login, signup, logout };
