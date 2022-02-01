import React from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import StarIcon from "@mui/icons-material/Star";

const Stats = (props) => {
    let {statsValue} = props;
    return (
        <React.Fragment>
            <div className="statsContainer">
                <h2>Base Stats</h2>
                <div className="stats">
                    <div className="title">
                        <Stack spacing={2.1}>
                            <p>HP</p>
                            <p>ATK</p>
                            <p>DEF</p>
                            <p>SPD</p>
                        </Stack>
                    </div>
                    <div className="values">
                        <Stack spacing={1.5}>
                            {statsValue && statsValue.map((data, index) => {
                                return (
                                    <Rating name="read-only" readOnly key={index} value={(data.base_stat / 224) * 5} precision={0.5} emptyIcon={<StarIcon style={{ opacity: 1, color: 'white' }} />} />
                                )
                            })}
                        </Stack>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Stats