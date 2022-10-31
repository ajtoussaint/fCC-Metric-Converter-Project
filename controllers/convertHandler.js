function ConvertHandler() {

  this.getNum = function(input) {
    //takes query string as an input and returns the number as float
    console.log("using getNum");
    let result;

    return result;
  };

  this.getUnit = function(input) {
    //Takes Query string as input and returns the unit as string
    console.log("using getUnit");
    let result;

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    //takes the return of "getUnit" and returns the converted unit as string
    //Ex if getUnit(...)=gal then this will return "L"
    console.log("using getReturnUnit");
    let result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    //takes abbreiviation as input and reutrns full name as str
    console.log("using spellOutUnit");
    let result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    //takes initial number and unit from query string
    console.log("using convert");
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //takes all of the information and returns a string that describes the conversion
    console.log("using get String");
    let result;

    return result;
  };

}

module.exports = ConvertHandler;
