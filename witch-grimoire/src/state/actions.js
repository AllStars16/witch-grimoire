import * as types from "./types";

const setCrystals = crystals => {
    return { type: types.SET_CRYSTALS, crystals }; // same as return {type: types.SET_CRYSTALS, crystals: crystals};
};

export {
    setCrystals
};