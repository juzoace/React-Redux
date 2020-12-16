import React from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

const Counter = (props) => {
    return (
        <div>
           <CounterOutput value= {props.ctr}/> 
           <CounterControl label="Increment" clicked={props.onIncrementCounter}/>
           <CounterControl label="Decrement" clicked={props.onDecrementCounter}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {

        ctr: state.ctr.counter,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);