import * as httpUtils from "../utils/httpUtils.js";
import * as httpConstants from "../utils/httpConstants"
import * as actions from "./actions"

const doGetCrystals = (dispatch) => {
    const l = httpConstants.CRYSTALS_ENDPOINT;
    const response = fetch(httpConstants.CRYSTALS_ENDPOINT, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    console.log("REsponse: " + response);
    if (response.ok) {
        let respJson = response.json();

        respJson.then(function (json) {
            dispatch(actions.setCrystals(json));
        });
        /*  let response = await httpUtils.GET(constants.CRYSTALS_ENDPOINT);
         if (response.ok) {
             const json = response.json;
             dispatch(actions.setCrystals(json));
         } else {
             dispatch(actions.setCrystals(new Error("Error in doGetCrystals")));
         } */
    } else {
        console.log("Error in doGetCrystals");
    }
}

export {
    doGetCrystals
};
