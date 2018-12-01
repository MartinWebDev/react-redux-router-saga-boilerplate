import Types from "../Actions/_Types";

const SampleReducer = (state = {}, action) => {
    switch (action.type) {
        case Types.SAMPLE_ACTION:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default SampleReducer;
