import React, { useEffect, useRef, useState } from "react";
import GenMock from "./GenarateMock";
import { InputNumber, InputButton, InputReset } from "./components/inputs/";
import CopyToClipboard from "./CopytoClipboard";
import "./styles.css";

const App = () => {
  const [mock, setMock] = useState({});
  const [cat, setCat] = useState(0);
  const [sub, setSub] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [output, setOutput] = useState(false);
  const myRef = useRef(null);
  const refCat = useRef(null);
  const refSub = useRef(null);
  const refProd = useRef(null);

  useEffect(() => {
    setDisabled(parseInt(cat) > 0 && parseInt(sub) > 0 ? false : true);
  }, [cat, sub]);

  const handleClick = async () => {
    const mocks = await GenMock(cat, sub);
    console.log(mocks);
    setMock(mocks);
    setOutput(true);
    myRef.current.scrollIntoView();
  };

  const handleReset = () => {
    setCat({});
    setSub({});
    setOutput(false);
  };

  const handleCopy = (e, ref) => {
    CopyToClipboard(e, ref);
  };

  return (
    <div className="App">
      <h1 className="title">Faker Mock</h1>
      <div className="description">
        Generate mock of string or object informing the number of categories,
        sub-categories and products, generating strings in screen or objects on
        console
      </div>
      <div className="container">
        <div className="container-inputs">
          <InputNumber
            classe="default"
            label="Categories"
            value={cat}
            callback={setCat}
          />
          <InputNumber
            classe="default"
            label="Sub-Categories"
            value={sub}
            callback={setSub}
          />
        </div>
        <div className="container-actions">
          <InputButton
            text="GENERATE"
            classe="default"
            disabled={disabled}
            callback={handleClick}
          />
          {output && (
            <InputReset text="RESET" classe="dark" callback={handleReset} />
          )}
        </div>
        <div className="output" ref={myRef}>
          {output && (
            <div>
              <div className="mocks mock_cats">
                <h2>Categories</h2>
                <textarea ref={refCat} value={mock.cats.strings} />
                <button className="copy" onClick={(e) => handleCopy(e, refCat)}>
                  Copy
                </button>
              </div>

              <div className="mocks mock_subs">
                <h2>Sub-Categories</h2>
                <textarea ref={refSub} value={mock.subs.strings} />
                <button className="copy" onClick={(e) => handleCopy(e, refSub)}>
                  Copy
                </button>
              </div>

              <div className="mocks mock_prods">
                <h2>Products</h2>
                <textarea ref={refProd} value={mock.prods.strings} />
                <button
                  className="copy"
                  onClick={(e) => handleCopy(e, refProd)}
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
