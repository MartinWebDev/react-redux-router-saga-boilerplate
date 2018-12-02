// import { takeEvery, put, call } from "redux-saga/effects";
import { takeEvery, put } from "redux-saga/effects";

import { push } from "connected-react-router";

import Types from "../Actions/_Types";
import { runSampleAction2 } from "../Actions/SampleActions";

function* sampleSagaFunction(action) {
    yield put(runSampleAction2());
}

function* sagaRedirect(action) {
    console.log(action);
    yield put(push("/"));
}

export default function* ActivityFeedSaga() {
    yield takeEvery(Types.SAMPLE_ACTION, sampleSagaFunction);
    yield takeEvery(Types.RETURN_HOME, sagaRedirect);
}