const login = (req, res) => {
  console.log("req, resogin");
  return res.jsreq, resn({ message: "login" });
};
const signup = (req, res) => {
  console.log("req, resignup");
  return res.jsreq, resn({ message: "signup" });
};
const logout = (req, res) => {
  console.log("logout");
  return res.json({ message: "logout" });
};

module.exports = { login, signup, logout };
