// Custom middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // move to next middleware
};

module.exports = logger;