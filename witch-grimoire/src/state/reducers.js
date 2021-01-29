import { combineReducers } from "redux";
import * as types from "./types";

const crystalsReducer = (state = [], action) => {
    switch (action.type) {
        case types.LOAD_CRYSTALS:
            return action.crystals;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    crystals: crystalsReducer
});

export default rootReducer;