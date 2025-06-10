import React from 'react'
import Playground_sidebar from "../components/Playground_sidebar"
import PlaygroundCanvas from "../components/PlaygroundCanvas"
import { useState } from 'react';

function PlaygroundPage() {
    const [compoIsDragged, setCompoIsDragged] = useState(false);


  return (
    <div className='flex gap-24'>
      <Playground_sidebar setCompoIsDragged={setCompoIsDragged}/>
      <div className='px-24 py-26'>
        <PlaygroundCanvas  compoIsDragged = {compoIsDragged} setCompoIsDragged={setCompoIsDragged}/>
      </div>
     
    </div>
  )
}

export default PlaygroundPage
