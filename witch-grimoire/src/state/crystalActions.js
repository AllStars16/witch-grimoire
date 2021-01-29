import * as types from "./types";
import * as crystalApi from "../api/crystalApi";

export function loadCrystals() {
    return function (dispatch) {
        return crystalApi.getCrystals().then(crystals => {
            dispatch({ type: types.LOAD_CRYSTALS, crystals });
        }).catch(error => {
            throw error;
        })
    }
}
