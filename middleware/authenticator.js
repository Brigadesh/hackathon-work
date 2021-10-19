module.exports.authenticate = (req, res, next) => {
  console.log("Authenticating..");
  next();
};
