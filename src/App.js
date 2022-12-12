import './App.css';
import { useState } from "react";
import Strength from './Strength';

function App() {
  const [password, setPassword] = useState(1)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  function handleSubmit(){
    setPassword("")

  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  

  return (
    <div className="App">
        <input value={password} onChange={handlePassword}></input>
        <button disabled={buttonDisabled} onClick={handleSubmit}>Submit</button>
        <Strength password={password} setButtonDisabled={setButtonDisabled}/>    
    </div>
  );
}

export default App;