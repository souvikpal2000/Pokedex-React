import React from "react";

const WeiHeight = (props) => {
    let {weightValue, heightValue} = props;
    return(
        <React.Fragment>
            <div className="heiWeiContainer">
                <div className="weight">
                    <p>{weightValue} KG</p>
                    <p className="weightLabel">Weight</p>
                </div>
                <div className="height">
                    <p>{heightValue} M</p>
                    <p className="heightLabel">Height</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WeiHeight;