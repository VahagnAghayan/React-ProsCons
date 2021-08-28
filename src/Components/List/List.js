import React from 'react';
import { useSelector } from 'react-redux';

import ListItem from '../List-item/List-item';

import './List.css';

function List({heading,globId}) {
  console.log('sadasdsa');
  const prosState = useSelector(function(state) {
    console.log(state.inputsState.prosState);
    return state.inputsState.prosState;
  });
  
  const consState = useSelector(function(state) {
    return state.inputsState.consState;
  });

  // console.log(prosState);
  
  function returnElements(globId) {
    let elements = [];
    // console.log('MTA');
    if(heading === 'Pros'){
      elements = prosState.map(({value,id},index) => {
        return <ListItem value={value} id={id} key={id} index={index} heading={heading} globId={globId}/>
      });
      return elements;
    }
    if(heading === 'Cons'){
      elements = consState.map(({value,id},index) => {
        return <ListItem value={value} id={id} key={id} index={index} heading={heading} globId={globId}/>
      });
      return elements;
    }
     
  }

  return(
    <div className='content'>
      <div className='heading'>
        <h2>{heading}</h2>
      </div>

      <ol className='list'>
        {returnElements(heading,globId)}
      </ol>
    </div>
  );

}

export default List;
