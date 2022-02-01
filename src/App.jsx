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
    let [values, setValues] = useState({
        name: "",
        type: "",
        weight: 0,
        height: 0,
        stats: "",
        image: ""
    })

    useEffect(() => {
        (async function(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`);
            const arr = res.data.stats;
            let newArr = arr.filter((data, index) => {
                return (index === 0 || index === 1 || index === 2 || index === 5)
            })
            setValues((preValues) => {
                return{
                    name: res.data.name,
                    type: res.data.types,
                    weight: res.data.weight/10,
                    height: res.data.height/10,
                    stats: newArr,
                    image: res.data.sprites.other.dream_world.front_default
                }
            })
        })();
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
                <Id typeName={values.type} no={count} />
                <Image typeName={values.type} pokeImg={values.image} pokeName={values.name} />
                <Name pokeName={values.name} />
                <Type typeName={values.type} />
                <WeiHeight weightValue={values.weight} heightValue={values.height} />
                <Stats statsValue={values.stats} />
            </div>
            <div className="btnContainer">
                <Buttons backFunc={minus} forwardFunc={plus} /> 
            </div>
        </React.Fragment>
    )
}

export default App;