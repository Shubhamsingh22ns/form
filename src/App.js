
import './App.css';

import Demo from './component/Demo';
import Shubham from './component/Shubham';
import React , {useState } from 'react';
import IncDec from './component/IncDec';
import NewShubham from './component/NewShubham';
import Form from './component/Form';
import NewForm from './component/NewForm';


function App() {

  function child(object){
    console.log("I'm Inside App .JS")
    console.log(object)
  }
  return (
    <div >
    
      Jai Shree RAM ..
      {/* <Form/> */}
      <NewForm/>
      
      
    </div>
  );
}

export default App;
