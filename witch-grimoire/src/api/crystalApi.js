import { handleResponse, handleError } from "./apiUtils";
import * as httpConstants from "./httpConstants";

export function getCrystals() {
    return fetch(httpConstants.CRYSTALS_ENDPOINT).then(handleResponse).catch(handleError);
}