import React from "react";

const Id = (props) => {
    let {typeName, no} = props;
    return(
        <React.Fragment>
            <div className="idContainer" id={typeName && typeName[0].type.name}>
                <p>#{no}</p>
            </div>
        </React.Fragment>
    )
}

export default Id;