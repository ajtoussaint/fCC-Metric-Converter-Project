'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  //A test route to help me understand
  app.route("/api/convert").get( (req,res) => {
    //end goal: take the query and return a JSON object with all the info in the example
    //Ex: { initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' }
    console.log("test route");
    res.send("Hello API")
  })

};
