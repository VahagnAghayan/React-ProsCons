import { memo } from "react";

import "./List-item.css";

function ListItem({
  value,
  id,
  index,
  heading,
  globId,
  inputHandler,
  dragStartHandler,
}) {

  return (
    <li className="item-li">
      <input
        type="text"
        value={value}
        draggable="true"
        onChange={(e) => inputHandler(e.target.value, index, heading )}
        onDragStart={(e) => {
          e.dataTransfer.setData("currentHeading", heading);
          e.dataTransfer.setData("currentValue", e.target.value);
        }}
      />
    </li>
  );
}

export default memo(ListItem);
