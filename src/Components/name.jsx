import React from 'react'

const Name = (props) => {
    let {pokeName} = props
    return(
        <React.Fragment>
            <div className="nameContainer">
                <h1>{pokeName}</h1>
            </div>
        </React.Fragment>
    )
}

export default Name;