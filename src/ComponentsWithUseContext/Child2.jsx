import { useContext } from "react";
import { CountContext } from "./Parent";

const Child2 = () => {
    const count = useContext(CountContext);

    return (
        <div>
            <h3 style={{color: "red"}}>{ count }</h3>
        </div>
    );
}

export default Child2;