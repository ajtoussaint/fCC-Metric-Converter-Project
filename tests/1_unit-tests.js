const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  console.log("running unit tests");

  //convertHandler should correctly read a whole number input.
  test('read whole number input', function () {
    assert.equal(12,convertHandler.getNum("12lbs"), "Whole number input read incorrectly");
  });
  //convertHandler should correctly read a decimal number input.
  test("read a decimal number input", function (){
    assert.equal(12.2,convertHandler.getNum("12.2lbs"),"deciaml input read incorrectly");
  });
  //convertHandler should correctly read a fractional input.
  test("read a fractional input", function (){
    assert.equal("6",convertHandler.getNum("12/2lbs"),"factional input read incorrectly");
  });
  //convertHandler should correctly read a fractional input with a decimal.
  test("read a decimal number and fraction input", function (){
    assert.equal("6.15",convertHandler.getNum("12.3/2lbs"),"decimal and fractional combined input read incorrectly");
  });

  //convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  test("read a decimal number input", function (){
    assert.equal("invalid number",convertHandler.getNum("12/3/2lbs"),"double fraction did not throw error");
  });

  //convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  test("returned input of 1 when no number is provided", function (){
    assert.equal("1",convertHandler.getNum("lbs"),"Did not return default value of 1");
  });

  //convertHandler should correctly read each valid input unit.
  test("read each valid input unit", function (){
    assert.equal("lbs",convertHandler.getUnit("lbs"),"did not read lbs correctly");
    assert.equal("kg",convertHandler.getUnit("kg"),"did not read kg correctly");
    assert.equal("mi",convertHandler.getUnit("mi"),"did not read lbs correctly");
    assert.equal("km",convertHandler.getUnit("km"),"did not read km correctly");
    assert.equal("gal",convertHandler.getUnit("gal"),"did not read gal correctly");
    assert.equal("L",convertHandler.getUnit("L"),"did not read L correctly");
  });

  //convertHandler should correctly return an error for an invalid input unit.
  test("return error for invalid unit input", function (){
    assert.equal("invalid unit",convertHandler.getUnit("12lbx"),"recognized invalid unit");
  });

  //convertHandler should return the correct return unit for each valid input unit
  test("return correct return unit for each valid input unit", function() {
    assert.equal("kg",convertHandler.getReturnUnit("lbs"),"did not return kg for lbs");
    assert.equal("lbs",convertHandler.getReturnUnit("kg"),"did not return lbs for kg");
    assert.equal("km",convertHandler.getReturnUnit("mi"),"did not return km for mi");
    assert.equal("mi",convertHandler.getReturnUnit("km"),"did not return mi for km");
    assert.equal("L",convertHandler.getReturnUnit("gal"),"did not return L for gal");
    assert.equal("gal",convertHandler.getReturnUnit("L"),"did not return gal for L");
  });

  //convertHandler should correctly return the spelled-out string unit for each valid input unit
  test("return spelled out string for each valid input unit", function(){
    assert.equal("pounds", convertHandler.spellOutUnit("lbs"),"did not spell out lbs");
    assert.equal("kilograms", convertHandler.spellOutUnit("kg"),"did not spell out km");
    assert.equal("miles", convertHandler.spellOutUnit("mi"),"did not spell out mi");
    assert.equal("kilometers", convertHandler.spellOutUnit("km"),"did not spell out km");
    assert.equal("gallons", convertHandler.spellOutUnit("gal"),"did not spell out gal");
    assert.equal("liters", convertHandler.spellOutUnit("L"),"did not spell out L");
  });

  //convertHandler should correctly convert gal to L
  test("convert gal to L", function() {
    assert.equal(3.78541, convertHandler.convert("1","gal"),"failed to convert gallons correctly");
  });

  //convertHandler should correctly convert L to gal.
  test("convert L to gal", function() {
    assert.equal(1, convertHandler.convert("3.78541","L"),"failed to convertliters correctly");
  });
  //convertHandler should correctly convert mi to km.
  test("convert mi to km", function() {
    assert.equal(1.60934, convertHandler.convert("1","mi"),"failed to convert miles correctly");
  });

  //convertHandler should correctly convert km to mi.
  test("convert km to mi", function() {
    assert.equal(1, convertHandler.convert("1.60934","km"),"failed to convert kilometers correctly");
  });

  //convertHandler should correctly convert lbs to kg.
  test("convert lbs to kg", function() {
    assert.equal(0.45359, convertHandler.convert("1","lbs"),"failed to convert pounds correctly");
  });

  //convertHandler should correctly convert kg to lbs.
  test("convert kg to lbs", function() {
    assert.equal(1, convertHandler.convert("0.453592","kg"),"failed to convert kilograms correctly");
  });

});
