import React from 'react';


const ValidationComponent = ( props ) => {
    return (
        <div className="ValidationComponent">
            <p>{props.changed}</p>
        </div>
    )
};

export default ValidationComponent;