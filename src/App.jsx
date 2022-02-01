import React, { useEffect, useState } from "react";
import axios from "axios";

import Id from "./Components/Id";
import Image from "./Components/Image";
import Name from "./Components/Name";
import Type from "./Components/Type";
import WeiHeight from "./Components/WeiHeight";
import Stats from "./Components/Stats";
import Buttons from "./Components/Buttons";

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
                <Id typeName={type} no={count} />
                <Image typeName={type} pokeImg={image} pokeName={name} />
                <Name pokeName={name} />
                <Type typeName={type} />
                <WeiHeight weightValue={weight} heightValue={height} />
                <Stats statsValue={stats} />
            </div>
            <div className="btnContainer">
                <Buttons backFunc={minus} forwardFunc={plus} /> 
            </div>
        </React.Fragment>
    )
}

export default App;