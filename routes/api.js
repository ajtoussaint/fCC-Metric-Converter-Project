'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  //A test route to help me understand
  app.route("/api/convert").get( (req,res) => {
    //end goal: take the query and return a JSON object with all the info in the example
    //Ex: { initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' }
    let query = req.query.input;
    console.log("convert route, query=" + query);
    let queryNum = convertHandler.getNum(query);
    let queryUnit = convertHandler.getUnit(query);
    //format return in case of invalid input
    console.log("Number: " + queryNum + " Unit: " + queryUnit);
    if(queryNum =="Invalid Number" && queryUnit ==  "Invalid Unit"){
      res.send("invalid number and unit");
    } else if (queryNum =="Invalid Number"){
      res.send("invalid number");
    } else if (queryUnit ==  "Invalid Unit"){
      res.send("invalid unit");
    }else{
      let unitName = convertHandler.spellOutUnit(queryUnit);
      let returnUnit = convertHandler.getReturnUnit(queryUnit);
      let convertedValue = convertHandler.convert(queryNum, queryUnit);
      let returnString = convertHandler.getString(queryNum, queryUnit, convertedValue, returnUnit);
      res.send({
        initNum: queryNum,
        initUnit: queryUnit,
        returnNum: convertedValue,
        returnUnit: returnUnit,
        string: returnString});
    };
  })
};
