module.exports = (req, res, next) => {
  let errors = [],
    username = req.body.username,
    email = req.body.email,
    password = req.body.password;
  if (!username || username.length < 4) {
    errors.push({
      text: "Username shouldn't be blank and require minimum of 4 characters.",
    });
  }
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
