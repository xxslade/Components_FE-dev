import React from 'react'
import Playground_sidebar from "../components/Playground_sidebar"
import PlaygroundCanvas from "../components/PlaygroundCanvas"

function PlaygroundPage() {

    const handleGenerateLayout = (layoutData) => {
        console.log("full layout", layoutData);
    };


  return (
    <div className='flex'>
      <Playground_sidebar/>
      <PlaygroundCanvas onGenerateLayout={handleGenerateLayout}/>
    </div>
  )
}

export default PlaygroundPage
