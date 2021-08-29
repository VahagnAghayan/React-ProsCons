import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

import ListItem from '../List-item/List-item';

import { uidGenerator } from '/home/vahagn/Desktop/ReactProsCons/proscons/src/helpers/uidGenerator.js';


import './List.css';

// prosState: [{ value: '', id: uidGenerator() }],
//   consState: [{ value: '', id: uidGenerator() }]


const defaultProsState = [{value: '', id: uidGenerator()}];
const defaultConsState = [{value: '', id: uidGenerator()}]


function List({ heading, globId }) {

  const [prosState,setProsState] = useState(defaultProsState);
  const [consState,setConsState] = useState(defaultConsState);

  function inputHandler(e,id,index,heading,globId) {
    if(heading === 'Pros') {
      const newState = [...prosState];
      let value = e.target.value;
      newState[index].value = value;
      newState[index].id = uidGenerator();
      if (value.length > 0 && index === newState.length - 1) {
        newState[index + 1] = {};
        newState[index + 1].value = '';
        newState[index + 1].id = uidGenerator();

      }
      if (value.length === 0 && newState.length > 1) {
        newState.splice(index, 1);
      }
    setProsState(newState);  
    }
    if(heading === 'Cons') {
      const newState = [...consState];
      let value = e.target.value;
      newState[index].value = value;
      newState[index].id = uidGenerator();
      if (value.length > 0 && index === newState.length - 1) {
        newState[index + 1] = {};
        newState[index + 1].value = '';
        newState[index + 1].id = uidGenerator();

      }
      if (value.length === 0 && newState.length > 1) {
        newState.splice(index, 1);
      }
    setConsState(newState);
    }
  }

  function dragStartHandler(e,id,index,heading,globId) {
    e.dataTransfer.setData('currentIndex', index);
    e.dataTransfer.setData('currentHeading', heading);
    e.dataTransfer.setData('currentValue', e.target.value);
    // if(heading === 'Pros') {
    //   const newState = [...prosState];
    //   newState.splice(index,1);
    //   setProsState(newState);
    // }
    // if(heading === 'Cons') {
    //   const newState = [...consState];
    //   newState.splice(index,1);
    //   setConsState(newState);
    // }
  }
  function dropHandler(e) {
    let dragId = e.dataTransfer.getData('currentIndex');
    let dragHeading = e.dataTransfer.getData('currentHeading');
    let item = e.dataTransfer.getData('currentValue');
    // console.log(dragId);
    // let dropHeadingId = e.target.id;
    if(!item) {
      return;
    }
    if(dragHeading === 'Pros') {
      const newState1 = [...prosState];
      const newState2 = [...consState];
      newState1.splice(dragId,1);
      // newState2.splice(newState2.length-2,0,{value: item, id: uidGenerator()});
      newState2.unshift({value: item, id: uidGenerator()});
      setProsState(newState1);
      setConsState(newState2);
    }
    if(dragHeading === 'Cons') {
      const newState1 = [...prosState];
      const newState2 = [...consState];
      newState2.splice(dragId,1);
      // newState1.splice(newState2.length-2,0,{value: item, id: uidGenerator()});
      newState1.unshift({value: item, id: uidGenerator()});
      setProsState(newState1);
      setConsState(newState2);
    }
  }


  // console.log('sadasdsa');
  // const prosState = useSelector(function(state) {
  //   console.log(state.inputsState.prosState);
  //   return state.inputsState.prosState;
  // });

  // const consState = useSelector(function(state) {
  //   return state.inputsState.consState;
  // });

  // console.log(prosState);

  function returnElements(globId) {
    let elements = [];
    if (heading === 'Pros') {
      elements = prosState.map(({ value, id }, index) => {
        return <ListItem value={value} id={id} index={index} heading={heading} globId={globId} inputHandler={inputHandler} dragStartHandler={dragStartHandler}/>
      });
      return elements;
    }
    if (heading === 'Cons') {
      elements = consState.map(({ value, id }, index) => {
        return <ListItem value={value} id={id} index={index} heading={heading} globId={globId} inputHandler={inputHandler} dragStartHandler={dragStartHandler}/>
      });
      return elements;
    }

  }

  return (
    <div className='content' id={heading}
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => dropHandler(e)}>
      <div className='heading'>
        <h2>{heading}</h2>
      </div>

      <ol className='list'>
        {returnElements(heading, globId)}
      </ol>
    </div>
  );

}

export default List;
