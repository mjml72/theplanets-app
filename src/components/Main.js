import React, { useEffect, useState } from 'react'

export default function Main({ planet }) {
    const [info, setInfo] = useState("");

    function getInfo(infoType) {
        setInfo(planet[infoType]);
    }

    useEffect(() => {
        setInfo(planet.overview);

    }, [planet]);

    return (
        <div className='main'>
            <div className='image'>
                <img src={planet.image} alt={planet.name}></img>
            </div>
            <div className='info'>
                <h3>{planet.name}</h3>
                <p>{info}</p>
                <button className='btninfo' onClick={() => getInfo("overview")}>OVERVIEW</button>
                <button className='btninfo' onClick={() => getInfo("structure")}>STRUCTURE</button>
                <button className='btninfo' onClick={() => getInfo("surface")}>SURFACE</button>
            </div>
        </div>
    )
}
