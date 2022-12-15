const checkToken = (req, res, next) => {
  const { authorization } = req.header;

  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  if (authorization.length < 16 && typeof authorization !== 'string') {
    return res.status(401).json({ message: 'Token inválido' });
  }

  next();
};

module.exports = checkToken;