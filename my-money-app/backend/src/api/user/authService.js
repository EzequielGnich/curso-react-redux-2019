const _ = require("lodash");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./user");

const { AUTH_SECRET } = require("../common/consts");

// Regex para validar um email
const emailRegex = /\S+@\S+\.\S+/;

// Regex para validar uma senha
// A senha deverá ter digitos (?=.*\d)
// A senha deverá ter letras minusculas de a até z (?=.*[a-z])
// A senha deverá ter letras maisculas de A até Z (?=*[A-Z])
// A senha deverá ter caracteres especiais (?=.*[@#$%])
// A senha deverá ter entre 6 e 20 caracteres {6.20}
// ([?=.*\d][?=.*[a-z]][?=*[A-Z]][?=.*[@#$%]].{6.20})+([?=.*@#$%])
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = [];
  _.forIn(dbErrors.errors, error => errors.push(error.message));
  return res.status(400).json({ errors });
};

const login = (req, res, next) => {
  const email = req.body.email || "";
  const password = req.body.password || "";

  User.findOne({ email }, (err, user) => {
    if (err) {
      return sendErrorsFromDB(res, err);
    } else if (user && bcrypt.compareSync(password, user.password)) {
      const token = JWT.sign({ ...user }, AUTH_SECRET, {
        expiresIn: "1 day"
      });
      const { name, email } = user;
      res.json({ name, email, token });
    } else {
      return res.status(400).send({ errors: ["Usuário/Senha inválidos"] });
    }
  });
};

const validateToken = (req, res, next) => {
  const token = req.body.token || "";

  JWT.verify(token, AUTH_SECRET, function(err, decoded) {
    return res.status(200).send({ valid: !err });
  });
};

const signup = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body || "";
  console.log(req.body);
  if (!email.match(emailRegex)) {
    return res.status(400).send({
      errors: ["O e-mail informado está inválido"]
    });
  }

  if (!password.match(passwordRegex)) {
    return res.status(400).send({
      errors: [
        `Senha precisa ter: Uma letra maiúscula,
        uma letra minúscula, um número, um caractere especial(@#$%) e
        tamanho entre 6 e 20 digitos`
      ]
    });
  }

  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);

  if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
    return res.status(400).send({ errors: ["Senhas não conferem"] });
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      return sendErrorsFromDB(res, err);
    } else if (user) {
      res.status(400).send({ errors: ["Usuário já cadastrado"] });
    } else {
      const newUser = new User({ name, email, password: passwordHash });

      newUser.save(err => {
        if (err) {
          return sendErrorsFromDB(res, err);
        } else {
          login(req, res, next);
        }
      });
    }
  });
};

module.exports = {
  login,
  signup,
  validateToken
};
