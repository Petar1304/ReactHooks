import { createContext, useState } from "react";
import Child1 from "./Child1";

export const CountContext = createContext();

const Parent = () => {

    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={count}>
            <Child1 />
            <h1>{ count }</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </CountContext.Provider>
    );
}

export default Parent;

/*
	display: flex;
	justify-content: center;
*/