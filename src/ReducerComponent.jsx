import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "DEPOSIT":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        default:
            return state;
        }
}

const ReducerComponent = () => {

    const deposit = (amount) => {
        dispatch({
            type: "DEPOSIT",
            payload: amount,
        });
    }

    const withdraw = (amount) => {
        dispatch({
            type: "WITHDRAW",
            payload: amount,
        });
    }
 
    const [amount, dispatch] = useReducer(reducer, 500);

    return (
        <div>
            <h2>{ amount }</h2>
            <button onClick={() => deposit(500)}>Deposit</button>
            <button onClick={() => withdraw(200)}>Withdraw</button>
        </div>
    );
}

export default ReducerComponent;