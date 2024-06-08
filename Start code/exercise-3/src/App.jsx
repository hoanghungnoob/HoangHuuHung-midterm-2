import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a,setA] = useState("");
  const [b, setB] = useState("");
  const [error, setError] = useState(false);
  const [result,setResult] = useState("");
  /* You will need some function to handle the key pressed and button events */
  const onA = (e)=>{
    setA(e.target.value);
    setError(false);
  }
  const onB =(e)=>{
    setB(e.target.value);
    setError(false);
  }
  const handleCaculate =()=>{
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    if(isNaN(num1) || isNaN(num2)){
      setError(true);
      setResult("A and B shall be number!");
      console.log(result);
    }else{
      setError(false);
      setResult(num1+num2);
      console.log(result);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA}  />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input  disabled
        value={result}
        style={{ color: error ? "red" : "white" }}
       />
      <button onClick={handleCaculate} >Compute</button>
    </main>
  );
}

export default App;

