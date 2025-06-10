import React, { useState } from 'react';
import DropZone from './DropZone';
import desings_2 from './desings_2'; // Your component templates

const Canvas = () => {
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDrop = (item) => {
        const droppedDesign = desings_2.find(comp => comp.id === item.id);
        if (droppedDesign) {
            const newItem = { ...droppedDesign, x: item.x, y: item.y };
            setDroppedItems((prev) => [...prev, newItem]);
        }
    };


    return (
        <div className='w-full'>
        <DropZone onDrop={handleDrop}>
            {droppedItems.map(({ id, jsxCode, x, y }) => (
                <div key={id} className="my-4" style={{
      position: 'absolute',
      top: y,
      left: x
    }}>
                    {x}, {y}
                </div>
            ))}
        </DropZone>
        </div>
    );
};

export default Canvas;
