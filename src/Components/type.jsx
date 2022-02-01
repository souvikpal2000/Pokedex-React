import React from 'react';

const Type = (props) => {
    let {typeName} = props;
    return(
        <React.Fragment>
            <div className="typeContainer">
                {typeName && typeName.map((data,index) => {
                    return (
                        <div className="typeBox" id={data.type.name} key={index}>
                            <p className="type">{data.type.name}</p>
                        </div>       
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Type;