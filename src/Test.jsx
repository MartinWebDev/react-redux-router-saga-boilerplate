import React from "react";
import { connect } from "react-redux"

import PropTypes from 'prop-types';

import { runSampleAction } from "./Actions/SampleActions";

class Test extends React.Component {
    componentDidMount = () => {
        this.props.runSampleAction();
    }

    render() {
        return (<div>Hello world</div>);
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    runSampleAction: () => dispatch(runSampleAction())
});

Test.propTypes = {
    go: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
