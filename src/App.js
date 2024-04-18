import './App.css';
import React, {useState} from "react";
import Button from './button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container'>
        <p className={count<0 ? "showCount showMinusCount" : "showCount"}>Count {count}</p>
        <div className='buttons'>
          <Button buttonText = "＋" buttonClicked={()=>{setCount(count+1)}} className="plusButton"/>
          <Button buttonText = "ー" buttonClicked={()=>{setCount(count-1)}} className="minusButton"/>
        </div>
      </div>
    </div>
  );
}

export default App;
