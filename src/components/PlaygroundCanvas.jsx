import React, { useRef, useState, useEffect } from 'react'
import DynamicCompiler from './DynamicCompiler'

function PlaygroundCanvas({ compoIsDragged, setCompoIsDragged }) {

    const noOfCells = 10
    const cellWidth = 900 / noOfCells;
    const cellHeight = 900 / noOfCells;

    const [loading, setLoading] = useState(false);

    const [layoutCodeByAI, setLayoutCodeByAI] = useState(null);
    // useEffect(()=>{}, [layoutCodeByAI]);
    const [msgSentToAI, setMsgSentToAI] = useState([]);


    const [gridOccupancy, setGridOccupancy] = useState(
        Array(noOfCells).fill(null).map(() => Array(noOfCells).fill(false))
    );

    const [hoveredCell, setHoveredCell] = useState({ x: null, y: null });

    const [droppedComponents, setDroppedComponents] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        setCompoIsDragged(false);

        const componentCode = e.dataTransfer.getData('componentCode');

        const canvasRect = e.currentTarget.getBoundingClientRect();
        const X = (e.clientX - canvasRect.left);
        const Y = (e.clientY - canvasRect.top);

        const xCellNo = Math.floor(X / cellWidth);
        const yCellNo = Math.floor(Y / cellHeight);

        if (gridOccupancy[xCellNo][yCellNo]) {
            alert("Space already occupied!");
            return;
        }

        const x = xCellNo * cellWidth;
        const y = yCellNo * cellHeight;

        const newGrid = [...gridOccupancy];
        newGrid[xCellNo][yCellNo] = true;
        setGridOccupancy(newGrid);

        const newComponent = { code: componentCode, x, y };
        setDroppedComponents([...droppedComponents, newComponent]);

        //function to generate the code of current layout
        generateLayoutByAI(componentCode, x, y);
    }

    const generateLayoutByAI = (code, x, y) => {
        const component = {
            code: code,
            x: x,
            y: y
        };

        const nMessage = [...msgSentToAI, { role: "user", content: JSON.stringify(component) }]
        setMsgSentToAI(nMessage);

        const handleSubmit = async () => {
            const userMessages = nMessage;

            try {
                const response = await fetch("http://localhost:4000/api/v1/ai_playground", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userMessages),
                });

                const data = await response.json();
                setLayoutCodeByAI(data.code)
                console.log(data.code);
            } catch (err) {
                console.error("Fetch failed:", err);
            }
        };
        handleSubmit();
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleGenerateLayout = async () => {
        // console.log(droppedComponents);
        setLoading(true);
        try {
            const response = await fetch("http://localhost:4000/api/v1/ai_playground", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(droppedComponents)
            });

            const data = await response.json();
            if (data.success) {
                console.log(data.code);
            } else {
                console.log("Did not get response from llm")
            }
        } catch (err) {
            consle.error(err);
        }
        setLoading(false);
    };

    return (
        <div className='bg-gray-300 '>
            <div className="relative w-[900px] h-[900px] bg-gray-300" onDrop={handleDrop} onDragOver={handleDragOver}>

                {/* Grid Overlay */}
                {compoIsDragged ? (<div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-0">
                    {[...Array(100)].map((_, index) => {
                        const x = index % 10;
                        const y = Math.floor(index / 10);
                        const isHovered = hoveredCell.x === x && hoveredCell.y === y;
                        return (
                            <div
                                key={index}
                                onDragOver={() => setHoveredCell({ x, y })}
                                className={`border border-dashed w-full h-full ${isHovered
                                    ? 'bg-green-300 bg-opacity-25'
                                    : ''
                                    }`}
                            />
                        );
                    })}
                </div>) : (<div></div>)}

                {/* Dropped Components */}
                {/* {droppedComponents.map((comp, index) => (
                    <div
                        key={index}
                        className="absolute z-10"
                        style={{ top: comp.y, left: comp.x }}
                    >
                        <DynamicCompiler defaultCode={comp.code} previewOnly={true} />
                    </div>
                ))} */}
                {layoutCodeByAI ? (<DynamicCompiler defaultCode={layoutCodeByAI} previewOnly={true} />) : (<div></div>)}
            </div>

            <div className=' p-4'>
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
