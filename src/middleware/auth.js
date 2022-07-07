const auth = (req, res, next) => {
  // if (req.session.isLoggedIn) {
  //   console.log(`[INFO]: User ${req.session.user.email} is in session`);
  //   next();
  // } else {
  //   res.redirect("/login");
  // }
  console.log(`[INFO]: User is in session`);
  next();
};

module.exports = auth;
