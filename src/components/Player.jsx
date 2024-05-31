import React from 'react';
import {useState} from 'react';

export default function Player() {
  const [name,setName] = useState('');
  function handleInput(evt){
    setName(evt.target.value)
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input type="text" value={name} onChange={handleInput}/>
        <button>Set Name</button>
      </p>
    </section>
  );
}
