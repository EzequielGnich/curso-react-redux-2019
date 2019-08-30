const JWT = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // CORS preflight request
  if (req.method === "OPTIONS") {
    next();
  } else {
    const token =
      req.body.token || req.query.token || req.headers["Authorization"];

    if (!token) {
      return res.status(403).send({ errors: ["Token não providenciado"] });
    }

    JWT.verify(token, process.env.AUTH_SECRET, function(err, decoded) {
      if (err) {
        return res.status(403).send({
          errors: ["Falha na autenticação do token"]
        });
      } else {
        // req.decoded = decoded;
        next();
      }
    });
  }
};
