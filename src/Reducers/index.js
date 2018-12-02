import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import SampleReducer from './SampleReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    SampleReducer
});
