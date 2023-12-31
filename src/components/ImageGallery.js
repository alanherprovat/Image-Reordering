import React from "react";
import { useDrag, useDrop } from "react-dnd";
import "../Styles.css";
function ImageGallery({
  src,
  id,
  index,
  alter,
  moveImage,
  featureImageId,
  isSelected,
  onToggleSelect,
}) {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveImage(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      ref={ref}
      style={{ opacity }}
      className={`grid-item ${featureImageId === id ? "large" : ""} ${
        featureImageId === id ? "feature" : ""
      } ${isSelected ? "selected" : ""}
`}
    >
      {featureImageId === id && (
        <img className="mid-square full-size" src={src} alt={alter} />
      )}
      {!(featureImageId === id) && (
        <img className="small-square full-size" src={src} alt={alter} />
      )}
      <input type="checkbox" checked={isSelected} onChange={onToggleSelect} />
    </div>
  );
}

export default ImageGallery;
