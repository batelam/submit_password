import { useState, useEffect } from "react";

function Strength(props) {
  const {password, setButtonDisabled } = props
  const [strength, setStrength] = useState("WEAK")
  
  useEffect(()=>{
    if (password.length > 2 && password.length < 7) {
        setStrength("MEDIUM")
        setButtonDisabled(false)
    }
    else if (password.length>6){
        setStrength("STRONG")
        setButtonDisabled(false)
    }
    else{
        setStrength("WEAK")
        setButtonDisabled(true)
    }
    
  },[password,setButtonDisabled])
    
  return (
    <div className="Strength">
        <p>{strength} Password</p>
    </div>
  );
}

export default Strength;