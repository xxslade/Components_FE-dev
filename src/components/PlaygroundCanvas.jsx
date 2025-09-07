import React, { useState } from 'react';
import DynamicCompiler from './DynamicCompiler';
import { Rnd } from 'react-rnd';

function PlaygroundCanvas({ compoIsDragged, setCompoIsDragged }) {
    const noOfCells = 10;
    const canvasSize = 900;
    const cellWidth = canvasSize / noOfCells;
    const cellHeight = canvasSize / noOfCells;

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
        const X = e.clientX - canvasRect.left;
        const Y = e.clientY - canvasRect.top;

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

        const newComponent = { id: Date.now(), code: componentCode, x, y, width: 100, height: 100 };
        setDroppedComponents([...droppedComponents, newComponent]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDeleteComponent = (id) => {
        const updatedComponents = droppedComponents.filter(comp => comp.id !== id);
        setDroppedComponents(updatedComponents);
    };

    return (
        <div className='bg-gray-300 flex justify-center items-center min-h-screen'>
            <div
                className="relative w-[900px] h-[900px] bg-gray-300 border border-black"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {/* Grid Overlay */}
                {compoIsDragged && (
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-0">
                        {[...Array(100)].map((_, index) => {
                            const x = index % 10;
                            const y = Math.floor(index / 10);
                            const isHovered = hoveredCell.x === x && hoveredCell.y === y;

                            return (
                                <div
                                    key={index}
                                    onDragOver={() => setHoveredCell({ x, y })}
                                    className={`border border-dashed w-full h-full ${isHovered ? 'bg-green-300 bg-opacity-25' : ''}`}
                                />
                            );
                        })}
                    </div>
                )}

                {/* Dropped Components with Resizing and Delete */}
                {droppedComponents.map((comp, index) => (
                    <Rnd
                        key={comp.id}
                        size={{ width: comp.width, height: comp.height }}
                        position={{ x: comp.x, y: comp.y }}
                        bounds="parent"
                        onDragStop={(e, d) => {
                            const updatedComponents = [...droppedComponents];
                            updatedComponents[index].x = d.x;
                            updatedComponents[index].y = d.y;
                            setDroppedComponents(updatedComponents);
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                            const updatedComponents = [...droppedComponents];
                            updatedComponents[index] = {
                                ...updatedComponents[index],
                                width: parseInt(ref.style.width),
                                height: parseInt(ref.style.height),
                                ...position,
                            };
                            setDroppedComponents(updatedComponents);
                        }}
                        className="z-10 border border-gray-500 bg-white shadow"
                    >
                        <div className="relative w-full h-full">
                            {/* Delete Button */}
                            <button
                                onClick={() => handleDeleteComponent(comp.id)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700"
                            >
                                ×
                            </button>
                            <DynamicCompiler defaultCode={comp.code} previewOnly={true} />
                        </div>
                    </Rnd>
                ))}
            </div>
        </div>
    );
}

export default PlaygroundCanvas;
