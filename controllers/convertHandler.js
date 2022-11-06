function ConvertHandler() {

  this.getNum = function(input) {
    //takes query string as an input and returns the number as float
    let result = input.slice(0,input.search(/[a-z,A-Z]/));
    if(result.length == 0){ result= "1"};
    //check for invalid input
    if(!(/^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/.test(result))){
      return "invalid number";
    }
    return result;
  };

  this.getUnit = function(input) {
    //Takes Query string as input and returns the unit as string
    let result = input.slice(input.search(/[a-z,A-Z]/),input.length);
    if(result!="L"){result = result.toLowerCase()}
    //check for invalid input
    switch (result) {
      case "lbs":
      case "kg":
      case "gal":
      case "L":
      case "mi":
      case "km":
      break;
      default: result = "invalid unit";
      break;
    }
    console.log("get unit result",result);
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    //takes the return of "getUnit" and returns the converted unit as string
    //Ex if getUnit(...)=gal then this will return "L"
    let result;
    switch (initUnit) {
      case "lbs": result = "kg";
      break;
      case "kg": result = "lbs";
      break;
      case "gal": result = "L";
      break;
      case "L": result = "gal";
      break;
      case "mi": result = "km";
      break;
      case "km": result = "mi";
      break;
      default: result = "invalid unit"
      break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    //takes abbreiviation as input and reutrns full name as str
    let result;
    switch (unit) {
      case "lbs": result = "pounds";
      break;
      case "kg": result = "kilograms";
      break;
      case "gal": result = "gallons";
      break;
      case "L": result = "liters";
      break;
      case "mi": result = "miles";
      break;
      case "km": result = "kilometers";
      break;
      default: result = "invalid unit"
      break;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    //takes initial number and unit from query string
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    //handle the initNum if fraction
    if(initNum.indexOf("/") >= 0){
      console.log("Using fraction logic");
      let fractionArr = initNum.split("/")
      initNum = fractionArr[0]/fractionArr[1];
    }
    switch (initUnit) {
      case "lbs": result = initNum * lbsToKg;
      break;
      case "kg": result = initNum / lbsToKg;
      break;
      case "gal": result = initNum * galToL;
      break;
      case "L": result = initNum / galToL;
      break;
      case "mi": result = initNum * miToKm;
      break;
      case "km": result = initNum / miToKm;
      break;
      default: result = "invalid unit"
      break;
    }
    result = Math.round(result*100000)/100000
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //takes all of the information and returns a string that describes the conversion
    let result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " +this.spellOutUnit(returnUnit);
    return result;
  };

}

module.exports = ConvertHandler;
