const checkWatchedIn = (req, res, next) => {
  const { watchedIn } = req.body.talk;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!isFormatDate.test(watchedIn)) {
    return res.status(400).json({ message: 'O campo "watchedIn" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

module.exports = checkWatchedIn;