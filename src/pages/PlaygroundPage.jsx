import React from 'react'
import Playground_sidebar from "../components/Playground_sidebar"
import PlaygroundCanvas from "../components/PlaygroundCanvas"
import { useState } from 'react';

function PlaygroundPage() {
    const [compoIsDragged, setCompoIsDragged] = useState(false);

    const handleGenerateLayout = (layoutData) => {
        console.log("full layout", layoutData);
    };


  return (
    <div className='flex'>
      <Playground_sidebar setCompoIsDragged={setCompoIsDragged}/>
      <PlaygroundCanvas onGenerateLayout={handleGenerateLayout} compoIsDragged = {compoIsDragged} setCompoIsDragged={setCompoIsDragged}/>
    </div>
  )
}

export default PlaygroundPage
