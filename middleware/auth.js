import jwt from "jsonwebtoken"

const authenticateUser = (req, res, next) => {
    var token = req.headers.authorization;
    token = token?.split(' ')[1] || null;

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, "thisismyprivatekeyforUsertoverify");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default authenticateUser;
