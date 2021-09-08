import { useState, useCallback, memo } from "react";


import ListItem from "../List-item/List-item";

import { uidGenerator } from "/home/vahagn/Desktop/ReactProsCons/proscons/src/helpers/uidGenerator.js";

import "./List.css";


const defaultProsState = [{ value: "", id: uidGenerator() }];
const defaultConsState = [{ value: "", id: uidGenerator() }];

function List({ heading, globId }) {
  const [prosState, setProsState] = useState(defaultProsState);
  const [consState, setConsState] = useState(defaultConsState);

  const inputHandler = useCallback((value, index, heading ) => {

    const newState = [...(heading === "Pros" ? prosState : consState)];

    newState[index].value = value;
    if (value.length > 0 && index === newState.length - 1) {
      newState[index + 1] = {};
      newState[index + 1].value = "";
      newState[index + 1].id = uidGenerator();
    }
    if (value.length === 0 && newState.length > 1) {
      newState.splice(index, 1);
    }
    (heading === "Pros" ? setProsState : setConsState)(newState)

  }, [prosState, consState, setProsState, setConsState]);

  const dropHandler = (e) => {
    let dragHeading = e.dataTransfer.getData("currentHeading");
    let item = e.dataTransfer.getData("currentValue");
    if (!item) {
      return;
    }
    if (dragHeading === "Pros") {
      const newState1 = [...prosState];
      const newState2 = [...consState];

      newState2.unshift({ value: item, id: uidGenerator() });

      setProsState(newState1);
      setConsState(newState2);
    }
    if (dragHeading === "Cons") {
      const newState1 = [...prosState];
      const newState2 = [...consState];
      newState1.unshift({ value: item, id: uidGenerator() });

      setConsState(newState2);
      setProsState(newState1);
    }
  };


  const returnElements = () =>
    [...(heading === "Pros" ? prosState : consState)].map(
      ({ value, id }, index) => (
        <ListItem
          key={id}
          value={value}
          id={id}
          index={index}
          heading={heading}
          globId={globId}
          inputHandler={inputHandler}
        />
      )
    );

  return (
    <div
      className="content"
      id={heading}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => dropHandler(e)}
    >
      <div className="heading">
        <h2>{heading}</h2>
      </div>

      <ol className="list">{returnElements()}</ol>
    </div>
  );
}

export default memo(List);
