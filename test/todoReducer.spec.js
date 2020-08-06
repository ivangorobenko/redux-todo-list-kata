import chai from "chai";
import {todos} from "../src/todoReducer";
import deepFreeze from "deep-freeze";

chai.should();
describe("Todo reducer", function () {
    it("doit permettre de rajouter une reducers ", function () {
        const stateBefore = [];
        const actionAddTodo = {type: "ADD_TODO", id: 0, text: "Learn redux"};
        const stateAfter = [{
            id: 0, text: "Learn redux", completed: false
        }];
        deepFreeze(stateBefore);
        deepFreeze(actionAddTodo);

        const result = todos(stateBefore, actionAddTodo)
        result.should.be.deep.equals(stateAfter)
    });
    it("doit permettre passer une reducers à completed", function () {
        const stateBefore = [{
            id: 0, text: "Learn redux", completed: false
        }, {
            id: 1, text: "Go shopping", completed: false
        }];
        const actionToggleTodo = {type: "TOGGLE_TODO", id: 0};
        const stateAfter = [{
            id: 0, text: "Learn redux", completed: true
        }, {
            id: 1, text: "Go shopping", completed: false
        }];
        deepFreeze(stateBefore);
        deepFreeze(actionToggleTodo);

        const result = todos(stateBefore, actionToggleTodo)
        result.should.be.deep.equals(stateAfter);
    });
});