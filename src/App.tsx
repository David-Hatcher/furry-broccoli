import React, { useState } from 'react';
import logo from './logo.svg';
import './css/App.css';

function App() {
  const [toggle,setToggle] = useState<Boolean>(true);
  
  const getColor = (toggleState: Boolean): string => {
    if(toggleState) {
      return "bg-white hover:bg-gray-100 text-gray-800";
    }else{
      return "bg-gray-800 hover:bg-gray-100 text-gray-100 hover:text-black";
    }
  }
  return (
    <div className="grid grid-rows-5 grid-cols-5 h-full">
      <button className={`${getColor(toggle)} font-semibold py-2 px-4 border border-gray-400 rounded shadow row-start-3 col-start-3`} onClick={(e) => setToggle(!toggle)}>Hello Toggle</button>
    </div>
  );
}

export default App;
