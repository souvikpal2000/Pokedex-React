import React, { useEffect, useState } from "react";
import axios from "axios";
import Fab from '@mui/material/Fab';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import StarIcon from "@mui/icons-material/Star";

const App = () => {
    let [count, setCount] = useState(1);
    let [name, setName] = useState("");
    let [type, setType] = useState();
    let [weight, setWeight] = useState();
    let [height, setHeight] = useState();
    let [stats, setStats] = useState();
    let [image, setImage] = useState();

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`);
            setName(res.data.name);
            setType(res.data.types);
            setWeight(res.data.weight/10);
            setHeight(res.data.height/10);
            const arr = res.data.stats;
            let newArr = arr.filter((data, index) => {
                return (index === 0 || index === 1 || index === 2 || index === 5)
            })
            setStats(newArr);
            setImage(res.data.sprites.other.dream_world.front_default);
        }
        fetchData();
    }, [count])

    const minus = () => {
        if(count === 1){
            alert("Limit Reached");
            return;
        }
        setCount(count-1);
    }
    const plus = () => {
        setCount(count+1);
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="idContainer" id={type && type[0].type.name}>
                    <p>#{count}</p>
                </div>
                <div className="imgContainer" id={type && type[0].type.name}>
                    <img src={image} alt={name} />
                </div>
                <div className="nameContainer">
                    <h1>{name}</h1>
                </div>
                <div className="typeContainer">
                    {type && type.map((data,index) => {
                        return (
                            <div className="typeBox" id={data.type.name} key={index}>
                                <p className="type">{data.type.name}</p>
                            </div>       
                        )
                    })}
                </div>
                <div className="heiWeiContainer">
                    <div className="weight">
                        <p>{weight} KG</p>
                        <p className="weightLabel">Weight</p>
                    </div>
                    <div className="height">
                        <p>{height} M</p>
                        <p className="heightLabel">Height</p>
                    </div>
                </div>
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
                                {stats && stats.map((data, index) => {
                                    return(
                                        <Rating name="read-only" readOnly key={index} value={(data.base_stat/224)*5} precision={0.5} emptyIcon={<StarIcon style={{ opacity: 1, color: 'white' }} />} />
                                    )
                                })}
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btnContainer">
                <Fab size="medium" color="primary" aria-label="add" id="btn" onClick={minus}>
                    <ArrowLeftIcon className="left" />
                </Fab>
                <Fab size="medium" color="primary" aria-label="add" id="btn" onClick={plus}>
                    <ArrowRightIcon className="right" />
                </Fab>
            </div>
        </React.Fragment>
    )
}

export default App;