import React from 'react';
import { connect } from 'react-redux';
import { addIncrement } from '../actions/index';
import { bindActionCreators } from 'redux';

{/* <Increment increment={increment} addIncrement={addIncrement}></Increment> */}

const Increment = (props) => {
    return (
        <>
            <h2>{props.increment}</h2>
            <button onClick={() => props.addIncrement()}>Tambah</button>
        </>
    )
}

const mapStateToProps = ({ increment }) => ({
    increment: increment,
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        
        addIncrement: addIncrement,
        
    },
    dispatch,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Increment)

// const con = connect()
// con(Increment);