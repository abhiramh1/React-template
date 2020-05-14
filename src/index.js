import React, {useEffect } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
import Draggable from 'react-draggable';

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      draggable="true"
    />
  );
};

const App = () => {
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);



  return (
    <div>
      <div>
        Try to trag and image into the stage:
      <br />

        <Draggable>
          <div><textarea></textarea></div>
        </Draggable>
        <img
          alt="lion"
          src="data:image/jpeg;base64,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"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src;
          }}
        />
      </div>
      <div
        onDrop={e => {
          // register event position
          stageRef.current.setPointersPositions(e);
          // add image
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current
              }
            ])
          );
        }}
        onDragOver={e => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: '1px solid grey' }}
          ref={stageRef}
        >
          <Layer >
            {images.map(image => {
              return <URLImage draggable="true" image={image} />;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
