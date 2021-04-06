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


//Import complete


describe("Server!", () => {
      // Add your test cases here

      //Addition Test Cases
      it("Positive Addition Test Case", done => { 
        chai   
          .request(server)
          .post("/add")
          .send({num1: 1, num2: 2})
          .end((err, response) => {
              expect(response.body.result).to.equal(3);
          done();
          });
      });

      it("Negative Addition Test Case", done => {
        chai        
          .request(server)
          .post("/add")
          .send({num1: "string", num2: 2})
          .end((err, response) => {
              assert.strictEqual(response.status, 400);
            done();
          });
      });

      //Addition Test Cases
      it("Positive Divide Test Case", done => { 
        chai   
          .request(server)
          .post("/divide")
          .send({num1: 2, num2: 2})
          .end((err, response) => {
              expect(response.body.result).to.equal(1);
          done();
          });
      });
      
      it("Negative Divide Test Case", done => {
        chai        
          .request(server)
          .post("/divide")
          .send({num1: 2, num2: 0})
          .end((err, response) => {
              assert.strictEqual(response.status, 400);
            done();
          });
      });
});