import React from "react";

const Image = (props) => {
    let {typeName, pokeImg, pokeName} = props;
    return(
        <React.Fragment>
            <div className="imgContainer" id={typeName && typeName[0].type.name}>
                <img src={pokeImg} alt={pokeName} />
            </div>
        </React.Fragment>
    );
}

export default Image;