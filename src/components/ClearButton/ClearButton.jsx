import React from "react";
import './ClearButton.css';

export const ClearButton=(props)=>
    (<div className="ClearButton" onClick={props.handleClear}>
    {props.children}
</div>);