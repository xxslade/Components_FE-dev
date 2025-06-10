import React from "react";
import { useDrop} from "react-dnd";

const DropZone = ({ onDrop, children }) => {
  const dropRef = React.useRef(null); // 1. Create ref

  const [, drop] = useDrop({
    accept: ['button', 'navbar', 'card'],
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset || !dropRef.current) return;

      const canvasRect = dropRef.current.getBoundingClientRect();
      const x = clientOffset.x - canvasRect.left;
      const y = clientOffset.y - canvasRect.top;


      if (onDrop) {
        onDrop({ ...item, x, y });
      }
    }
  });

  // 2. Attach drag-and-drop behavior to ref
  drop(dropRef);

  return (
    <div ref={dropRef} className="relative w-full h-screen border-2 border-dashed border-gray-300">
      {children}
    </div>
  );
};

export default DropZone;
