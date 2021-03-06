import React from "react";
import { connect } from "react-redux";

import { push } from "connected-react-router";

import PropTypes from "prop-types";

import { runSampleAction, redirectFromSaga } from "./Actions/SampleActions";

class Test extends React.Component {
    componentDidMount = () => {
        this.props.runSampleAction();
    }

    render() {
        return (
            <div>
                Hello world <br />
                <button onClick={() => { this.props.push("/"); }}>Go Home!</button>
                <br /><br /><br />
                Hello again <br />
                <button onClick={() => { this.props.redirectFromSaga(); }}>Saga Home!</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    runSampleAction: () => dispatch(runSampleAction()),
    redirectFromSaga: () => dispatch(redirectFromSaga()),
    push: (path) => dispatch(push(path))
});

Test.propTypes = {
    runSampleAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
