import React from 'react';
import {useDispatch} from 'react-redux';

import './List-item.css';

function ListItem({value,id,index,heading,globId}) {

  const dispatch = useDispatch();

  return(
    <li className='item-li'>
      <input type='text' value={value} draggable='true' onChange={(e) => {
        dispatch({
          type: 'onchange',
          payload: {
            value: e.target.value,
            id: id,
            index: index,
            heading: heading,
            globId: globId
          }
        })
      }}></input>
    </li>
  );

}

export default ListItem;
