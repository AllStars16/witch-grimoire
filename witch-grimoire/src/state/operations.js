import * as httpUtils from "../utils/httpUtils.js";
import * as constants from "../utils/httpConstants.js"

const doGetCrystals = (dispatch) => {
    let response = await httpUtils.GET(constants.CRYSTALS_ENDPOINT);
    if (response.ok) {
        const json = response.json;
        await dispatch(actions.setCrystals(json));
    } else {
        //dispatch(actions.setCrystals(new Error("Error in doGetCrystals")));
    }
}

export {
    doGetCrystals
};
