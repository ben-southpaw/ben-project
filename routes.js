var bodyParser = require('body-parser');

var config = require('./knexfile')

var knex = require('knex')(config.development)

module.exports = {
  getdata: getdata,
  searchFirstName: searchFirstName

}


function getdata(req, res) {

  knex('definitions')
    .then(function (data) {
      var model = {
        terms: data
      }
      res.render('getdata', model)
    })
    .catch(function (error) {
      console.error(error)
    })
}

function searchFirstName(req, res) {
  var name = req.body.name
  knex('definitions').where('name', name)
    .then(function (data) {
      var item = data[0]
      res.render('searchFirstName', item)
    })
    .catch(function (error) {
      console.error(error)
    })
}
