import React,{useState} from 'react'
import DynamicCompiler from './DynamicCompiler'

function PlaygroundCanvas({onGenerateLayout}) {
  
    const [droppedComponents, setDroppedComponents] = useState([]);

    const handleDrop=(e) => {
        e.preventDefault();
        const componentCode = e.dataTransfer.getData('componentCode');

        const canvasRect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - canvasRect.left;
        const y = e.clientY - canvasRect.top;

        const newComponent = {code:componentCode,x,y};
        setDroppedComponents([...droppedComponents,newComponent]);
    }

    const handleDragOver = (e) =>{
        e.preventDefault();
    };

    const handleGenerateLayout = () =>{
        if(onGenerateLayout){
            onGenerateLayout(droppedComponents);
        }
    };
  
    return (
    <div className='flex-1 flex flex-col items-center justify-center'>
        <div
            className='relative bg-gray-300'
            style ={{width:'900px',height:'900px'}}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {droppedComponents.map((comp,index) => (
                <div
                    key={index}
                    className='absolute'
                    style={{top:comp.y,left:comp.x}}
                >
                    <DynamicCompiler defaultCode={comp.code} previewOnly={true} />
                </div>
            ))}
        </div>
                
        <div className='p-4'>
            <button
                onClick={handleGenerateLayout}
                className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow'
            >
                Generate Layout Code
            </button>

        </div>
    </div>
  );
}

export default PlaygroundCanvas;
