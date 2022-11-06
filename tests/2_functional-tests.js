const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  //timeout in case of problems
  this.timeout(10000);

  //Convert a valid input such as 10L: GET request to /api/convert.
  test("convert valid input", function(done){
    chai
      .request(server)
      .get("/api/convert?input=10L")
      .end(function (err, res){
        assert.equal(res.status, 200, "Server not connecting");
        assert.equal(res.body.string, "10 liters converts to 2.64172 gallons", "could not convert without number");
        done();
      });
  });

  //Convert an invalid input such as 32g: GET request to /api/convert.
  test("handle invalid unit", function(done){
    chai
      .request(server)
      .get("/api/convert?input=32g")
      .end(function (err, res){
        assert.equal(res.status, 200, "Server not connecting");
        assert.equal(res.text, "invalid unit", "invalid unit not detected");
        done();
      });
  });

  //Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
  test("handle invalid number", function(done){
    chai
      .request(server)
      .get("/api/convert?input=3/7.2/4kg")
      .end(function (err, res){
        assert.equal(res.status, 200, "Server not connecting");
        assert.equal(res.text, "invalid number", "invalid number not detected");
        done();
      });
  });

  //Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
  test("handle invalid number and invalid unit", function(done){
    chai
      .request(server)
      .get("/api/convert?input=3/7.2/4kilomegagram")
      .end(function (err, res){
        assert.equal(res.status, 200, "Server not connecting");
        assert.equal(res.text, "invalid number and unit", "invalid number AND unit not detected");
        done();
      });
  });
  //Convert with no number such as kg: GET request to /api/convert
  test("convert with no number", function(done){
    chai
      .request(server)
      .get("/api/convert?input=kg")
      .end(function (err, res){
        assert.equal(res.status, 200, "Server not connecting");
        assert.equal(res.body.string, "1 kilograms converts to 2.20462 pounds", "could not convert without number");
        done();
      });
  });

});
