import React, { useEffect, useState } from "react";
import GenMock from "./GenarateMock";
import "./styles.css";
const App = () => {
  const [mock, setMock] = useState({});
  const [cat, setCat] = useState(0);
  const [sub, setSub] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [output, setOutput] = useState(false);

  useEffect(() => {
    setDisabled(parseInt(cat) > 0 && parseInt(sub) > 0 ? false : true);
  }, [cat, sub]);

  const handleClick = async () => {
    const mocks = await GenMock(cat, sub);
    setMock(mocks);
    setOutput(true);
  };

  const handleReset = () => {
    setCat({});
    setSub({});
    setOutput(false);
  };
  return (
    <div className="App">
      <h1>Generate Faker Mock</h1>
      <div>
        Generate mock of string or object informing the number of categories,
        sub-categories and products, generating strings in screen or objects on
        console
      </div>
      <h1>INPUT</h1>
      <div className="container-inputs">
        <div className="inputs">
          <label>Categories</label>
          <input
            type="number"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label>Sub-Categories</label>
          <input
            type="number"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          />
        </div>
      </div>
      <div className="actions">
        <button className="generate" disabled={disabled} onClick={handleClick}>
          GENERATE MOCK
        </button>
        {output && (
          <button className="reset" onClick={handleReset}>
            RESET
          </button>
        )}
      </div>
      <div className="output">
        <h1>OUTPUT</h1>
        {output && (
          <div>
            <div className="mocks mock_cats">
              <h2>Categories</h2>
              {mock.cats}
            </div>

            <div className="mocks mock_subs">
              <h2>Sub-Categories</h2>
              {mock.subs}
            </div>

            <div className="mocks mock_prods">
              <h2>Products</h2>
              {mock.prods}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
