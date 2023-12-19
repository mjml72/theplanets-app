import { planets } from '../data';
import React from 'react';

export default function Header({ setIndexPlanet }) {


  return (
    <div className='header'>
        <h1>THE PLANETS</h1>
        <div className='nav'>
            {planets.map((item, index) =>{
                return (
                    <button key={index} onClick={() => setIndexPlanet(index)} className='btnnav'>{item.name}</button>
                )
            })}
        </div>
    </div>
  )
}
