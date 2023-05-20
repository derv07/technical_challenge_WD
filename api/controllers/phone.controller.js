const createError = require('http-errors');
const data = require('../data/phones.json')

module.exports.list = (req, res, next) => {
  res.json(data)
}

module.exports.detail = (req, res, next) => {
  const id = req.params.id;
  console.log(id)
  const phone = data.find((phone) =>  phone.id == id)
  console.log(phone)
  if (!phone) {
    next(createError(404, 'Phone not found'))
  } else {
    res.json(phone)
  }
}

