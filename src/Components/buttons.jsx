import React from 'react'
import Fab from '@mui/material/Fab';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Buttons = (props) => {
    let {backFunc, forwardFunc} = props;
    return (
        <React.Fragment>
            <Fab size="medium" color="primary" aria-label="add" id="btn" onClick={backFunc}>
                <ArrowLeftIcon className="left" />
            </Fab>
            <Fab size="medium" color="primary" aria-label="add" id="btn" onClick={forwardFunc}>
                <ArrowRightIcon className="right" />
            </Fab>
        </React.Fragment>
    )
}

export default Buttons;