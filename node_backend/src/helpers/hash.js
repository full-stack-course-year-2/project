const hash = (pass) => {
  const hashed = bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err, hash) => {
    if (err) throw err;
    pass = hash;
  });
  return hashed;
};

module.exports = hash;
