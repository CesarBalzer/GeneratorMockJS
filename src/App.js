import React, { useEffect, useState } from "react";
import GenMock from "./GenarateMock";
import InputNumber from "./components/inputs/InputNumber";
import InputButton from "./components/inputs/InputButton";
import InputReset from "./components/inputs/InputReset";
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
    console.log(mocks);
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
      <h2>INPUT</h2>
      <div className="container-inputs">
        <div className="inputs">
          <InputNumber label="Categories" value={cat} callback={setCat} />
        </div>
        <div className="inputs">
          <InputNumber label="Sub-Categories" value={sub} callback={setSub} />
        </div>
      </div>
      <div className="actions">
        <InputButton
          text="GENERATE MOCK"
          classe="generate"
          disabled={disabled}
          callback={handleClick}
        />
        {output && (
          <InputReset text="RESET" classe="reset" callback={handleReset} />
        )}
      </div>
      <div className="output">
        {output && (
          <div>
            <h2>OUTPUT</h2>
            <div className="mocks mock_cats">
              <h2>Categories</h2>
              {mock.cats.strings}
            </div>

            <div className="mocks mock_subs">
              <h2>Sub-Categories</h2>
              {mock.subs.strings}
            </div>

            <div className="mocks mock_prods">
              <h2>Products</h2>
              {mock.prods.strings}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
