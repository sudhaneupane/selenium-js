import { MyClass } from "../src/myClass.js";
let MyObj = new MyClass();
import * as chai from "chai";
let expect = chai.expect;

describe("test suite", function () {
  it("Test the add method", function () {
    expect(MyObj.add(1, 2)).to.be.equal(3);
  });
});
