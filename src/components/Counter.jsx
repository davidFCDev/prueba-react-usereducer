import React, { useContext, useReducer } from 'react';


// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const MULTIPLY = 'MULTIPLY'
const RESET = 'RESET'

const myContext = React.createContext(null);

const Points = () => {

    const state = useContext(myContext);

    return <p>Points: { state.count }</p>
}

const Counter = () => {

    // Initial state for Reducer
    const initialState = {

        count: 0
    }

    // Reducer to change State
    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT:
                return {
                    ...state,
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    ...state,
                    count: state.count - action.payload.quantity
                }
            case MULTIPLY:
                return {
                    ...state,
                    count: state.count * action.payload.quantity
                }
            case RESET:
                return {
                    count: 0
                }
            default:
                return state;
        }
        
    }

    // Asign useReducer to state, reducer and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <myContext.Provider value={state} >
            <div>
                <Points/>
                <button onClick={
                    () => dispatch({
                        type: INCREMENT,
                        payload: {
                            quantity: 1
                        }
                        })
                } >
                    Inc 1
                </button>
                <button onClick={
                    () => dispatch({
                        type: INCREMENT,
                        payload: {
                            quantity: 2
                        }
                        })
                } >
                    Inc 2
                </button>
                <button onClick={
                    () => dispatch({
                        type: MULTIPLY,
                        payload: {
                            quantity: 2
                        }
                        })
                } >
                    Mul x 2
                </button>
                <button onClick={
                    () => dispatch({
                        type: DECREMENT,
                        payload: {
                            quantity: 1
                        }
                        })
                } >
                    Menos
                </button>
                <button onClick={
                    () => dispatch({type: RESET})
                } >
                    Reset
                </button>
            </div>
        </myContext.Provider>
    );
}

export default Counter;
