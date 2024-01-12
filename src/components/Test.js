import React, { useState, Component } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';
import { Box } from '@mui/material';

const ResizableAndDraggableForm = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  const handleDrag = (e, ui) => {
    // Update the position based on the drag event
    setPosition({ x: ui.x, y: ui.y });
  };

  const handleResize = (e, { size }) => {
    // Update the size based on the resize event
    setSize({ width: size.width, height: size.height });
  };

  return (
        <Draggable 
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={position}
        onStop={(e, ui) => handleDrag(e, ui)}
        >
        <ResizableBox
            width={size.width}
            height={size.height}
            onResize={handleResize}
            draggableOpts={{ disabled: true }}
            resizeHandles={['se']}
        >
            <div className="handle" style={{ width: '100%', height: '100%', cursor: 'move', backgroundColor:'blue' }}>
                <Box backgroundColor="red">
                    hello world
                </Box>
            </div>
        </ResizableBox>
        </Draggable>
  );
};

export default ResizableAndDraggableForm;
