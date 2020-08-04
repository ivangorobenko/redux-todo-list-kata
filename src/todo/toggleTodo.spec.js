import chai from "chai";
import deepFreeze from "deep-freeze";
import {toggleTodo} from "./toggleTodo";

chai.should();
describe("Toggle todo", function () {
    it("doit mettre completé à true dans la todo", function () {
        const todoBefore = {
            id:0,
            text:"do something",
            completed : false
        }
        const todoAfter = {
            id:0,
            text:"do something",
            completed : true
        }
        deepFreeze(todoBefore);
        const result = toggleTodo(todoBefore);
        result.should.be.deep.equals(todoAfter)
    });
});