import { fork, all } from "redux-saga/effects";

import SampleSaga from "./SampleSaga";

// Forked for expandability in future
export default function* rootSaga() {
    yield all([
        fork(SampleSaga)
    ]);
}