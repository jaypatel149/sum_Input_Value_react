import React, { useState } from "react";

function App() {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleSumClick = () => {
    setSum(parseInt(inputValue1) + parseInt(inputValue2));
  };

  return (
    <div className="container py-5 px-5">
      <div className="row g-3">
        <div className="col-md-5">
          <input
            type="number"
            className="form-control"
            placeholder="Input Number..."
            value={inputValue1}
            onChange={handleInputChange1}
          />
        </div>
        <div className="col-md-5">
          <input
            type="number"
            className="form-control"
            placeholder="Input Number..."
            value={inputValue2}
            onChange={handleInputChange2}
          />
        </div>
        <div className="col-md-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSumClick}
        >
          SUM
        </button>
        </div>
      </div>

      <h2 className="py-4 ">Result: {sum}</h2>
    </div>
  );
}

export default App;
