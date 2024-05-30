import { MyClass } from "../src/myClass.js";
let MyObj = new MyClass();
import * as chai from "chai";
import sinon from "sinon";
let expect = chai.expect;

describe("test suite", function () {
  it("Test the add method", function () {
    expect(MyObj.add(1, 2)).to.be.equal(3);
  });
  it("spy the add method", function () {
    var spy = sinon.spy(MyObj, "add");
    var arg1 = 10,
      arg2 = 20;
    MyObj.anotherfn(arg1, arg2);
    sinon.assert.calledOnce(spy)
  });
});
