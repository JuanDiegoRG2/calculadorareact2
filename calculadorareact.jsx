import React, { useState } from "react";
import "./App.css";

function App() {
  // Estado para almacenar el valor actual de la calculadora
  const [input, setInput] = useState("");

  // Función para manejar los clics en los botones
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Función para evaluar la expresión matemática
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // eval es una forma sencilla de evaluar la expresión matemática
    } catch (error) {
      setInput("Error"); // En caso de un error, mostramos "Error"
    }
  };

  // Función para borrar la entrada
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;
