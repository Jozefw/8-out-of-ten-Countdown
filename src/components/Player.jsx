import React from 'react';
import {useState,useRef} from 'react';

export default function Player() {
  const [name,setName] = useState('');

  const InputRef = useRef(); 

  function submitName(evt){
    setName(InputRef.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref = {InputRef} type="text"/>
        <button onClick={submitName}>Set Name</button>
      </p>
    </section>
  );
}
