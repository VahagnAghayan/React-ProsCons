import React from 'react';

import './App.css';

import Header from '../Components/Header/Header';
import List from '../Components/List/List';

import {uidGenerator} from '../helpers/uidGenerator';

const myQuestion = 'Should i eat mcdonalds';

const headingsUid = {
  'Pros': uidGenerator(),
  'Cons': uidGenerator()
}
 

function App() {

  const elements = Object.keys(headingsUid).map((element) => {
    return <List heading={element} globId={headingsUid[element]} key={headingsUid[element]}/>
  });

  return (
    <div className='main'>
      <Header question={myQuestion}/>
      <div className='main-list'>
        {elements}
      </div>
    </div>
  );

}

export default App;
