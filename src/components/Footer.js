import React, { useEffect, useState } from 'react'

export default function Footer({ planet }) {
    const arrayHeaders = ["rotation time", "orbit time", "radius", "average temp."];
    const [data, setData] = useState([]);

    useEffect(()=>{
        const {rotation, orbit, radius, temperature} = planet;
        let array = [rotation, orbit, radius, temperature];
        setData(array);
    },[planet]);

    return (
        <div className='footer'>
            <div className='footerinfoboxes'>
            {arrayHeaders.map((item, index)=>{
                return (
                    <div key={index} className='infobox'>
                        <p>{item}</p>
                        <p className='big'>{data[index]}</p>
                    </div>
                )
            })}
            </div>
            <p>Sources : <a href='https://en.wikipedia.org/wiki/Solar_System' target='_blank'>Wikipedia</a><a href='https://science.nasa.gov/solar-system/'>NASA</a></p>
        </div>
    )
}
