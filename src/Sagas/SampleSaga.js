// import { takeEvery, put, call } from "redux-saga/effects";
import { takeEvery, put } from "redux-saga/effects";

import Types from "../Actions/_Types";
import { runSampleAction2 } from "../Actions/SampleActions";

function* sampleSagaFunction(action) {
    yield put(runSampleAction2());
}

export default function* ActivityFeedSaga() {
    yield takeEvery(Types.SAMPLE_ACTION, sampleSagaFunction);
}