import React from "react";
import { connect } from "react-redux"

import PropTypes from 'prop-types';

import { runSampleAction } from "./Actions/SampleActions";

class Test extends React.Component {
    componentDidMount = () => {
        this.props.go();
    }

    render() {
        console.log("hello");
        return (<div>Hello world</div>);
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    go: () => dispatch(runSampleAction())
});

Test.propTypes = {
    go: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
