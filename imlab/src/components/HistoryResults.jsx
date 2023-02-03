import React, {useContext} from "react";
import { Context } from "../App";
import './HistoryResult.css';

function ShowHistory() {

    const {
        num1,
        num2,
        id,
    } = useContext(Context);

    let {
        result,
    } = useContext(Context);

    return (
        <div className="App">
            <span>{num1} {id} {num2} = {result}</span>
        </div>
    )
}


export default ShowHistory;