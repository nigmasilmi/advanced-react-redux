import { SAVE_COMMENT } from "actions/types";
import commentsReducer from "reducers/comments";

it("handles actios of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles actions with unknown type", () => {
  const newState = commentsReducer([], { type: "lkjlkjl" });
  expect(newState).toEqual([]);
});
