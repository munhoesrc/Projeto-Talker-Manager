const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const validation = /\S+@\S+\.\S+/;

  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!validation.test(email)) {
    return res.status(400).json(
      { message: 'O "email" deve ter o formato "email@email.com"' },
    ); 
  }
  next();
};

module.exports = checkEmail;