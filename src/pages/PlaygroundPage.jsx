import React from 'react'
import Playground_sidebar from "../components/Playground_sidebar"
import PlaygroundCanvas from "../components/PlaygroundCanvas"

function PlaygroundPage() {


  return (
    <div className='flex'>
      <Playground_sidebar/>
      <PlaygroundCanvas />
    </div>
  )
}

export default PlaygroundPage
