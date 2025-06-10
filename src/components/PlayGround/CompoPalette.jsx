import React from 'react';
import desings_2 from './desings_2';
import { useDrag } from "react-dnd";

// Wrapper that makes any child draggable
const DraggableWrapper = ({ id, type, jsxCode, children }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type,
        item: { id, type }, // data passed to drop target
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}
        >
            {children}
        </div>
    );
};

const CompoPalette = () => {
    return (
        <div className="grid gap-4 p-4">
            {desings_2.map(({ id, type, jsxCode }) => (
                <DraggableWrapper key={id} id={id} type={type} jsxCode={jsxCode}>
                    <div className="p-2 border rounded shadow bg-white text-black text-sm font-medium">
                        {type} - {id}
                    </div>
                </DraggableWrapper>
            ))}
        </div>
    );
};

export default CompoPalette;
