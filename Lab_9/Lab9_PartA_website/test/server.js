// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp); 
const { expect } = chai;
var assert = chai.assert;




describe("Server!", () => {

    // Sample test case given to test / endpoint. 
    it("Returns the default welcome message", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equals("success");
          assert.strictEqual(res.body.message, "Welcome!");
          done();
        });
    });

    // Please add your test cases here.
    
    // Test Case 1 - Working
    it("Checks to see if the ops is an array and has at least 1 element", done => {
      chai
        .request(server)
        .get("/operations")
        .end((err, res) => {
          assert.isArray(res.body);
          assert.isNotEmpty(res.body);
          //expect(res).to.be.an('array');
          //expect(res.body).to.not.have.lengthOf(0);
          done();
        });
    });

    // Test Case 2 - Working
    it("Checks the properties of the response body", done => {
      chai
        .request(server)
        .get("/operations/1")
        .send({id: 1})
        .end((err, res) => {
          expect(res).to.have.status(200);
          assert.strictEqual(res.body.id, 1, "id != 1");
          assert.property(res.body, 'name', "Property name does not exist");
          assert.property(res.body, 'sign', "Property sign does not exist");
          done();
        });
    });

    // Test Case 3 - Working
    it("Checks the properties of the response body", done => {
      chai
        .request(server)
        .post("/operations")
        .send({id: 4, name: 'Divide', sign: '/'})
        .end((err, res) => {
          assert.equal(res.body.id, 4);
          assert.equal(res.body.name, 'Divide');
          assert.equal(res.body.sign, '/');
          done();
        });
    });


});