module.exports = (req, res, next) => {
  let errors = [],
    email = req.body.email,
    password = req.body.password;

  if (!email) {
    errors.push({ text: "Please enter email..." });
  }
  if (!password || password.length < 6) {
    errors.push({
      text: "Password shouldn't be blank and require minimum of 6 characters.",
    });
  }

  if (errors.length > 0) {
    return res.status(400).send(errors);
  } else {
    next();
  }
};
