function checkRole(req, res, next) {
  if (req.user.role === 'admin') {
    next();
  }
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    if (!accessToken) {
      return res.sendStatus(403);
    }

    const { decoded } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Invalid access token');
    res.sendStatus(403);
  }
}

module.exports = checkRole;
