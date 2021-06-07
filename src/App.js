import { useState } from "react";
import styled, { css } from "styled-components";
import "./App.scss";
import Box from "./components/Box";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `};
`;

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="App">
      <section>
        <h2>1) buttons</h2>
        <div className="container">
          <Button size="large" onClick={() => console.log("clicked!")}>
            Click me
          </Button>
          <Button>Click me</Button>
          <Button size="small">Click me</Button>
        </div>
        <div className="container">
          <Button size="large" color="gray">
            Click me
          </Button>
          <Button color="gray">Click me</Button>
          <Button size="small" color="gray">
            Click me
          </Button>
        </div>
        <div className="container">
          <Button size="large" color="blue">
            Click me
          </Button>
          <Button color="blue">Click me</Button>
          <Button size="small" color="blue">
            Click me
          </Button>
        </div>
        <div className="container">
          <Button size="large" color="blue" outline>
            Click me
          </Button>
          <Button outline>Click me</Button>
          <Button size="small" color="gray" outline>
            Click me
          </Button>
        </div>
        <div className="container">
          <Button size="large" color="blue" fullWidth>
            Click me
          </Button>
          <Button size="large" fullWidth>
            Click me
          </Button>
          <Button size="large" color="gray" fullWidth>
            Click me
          </Button>
        </div>
      </section>

      <section>
        <h2>2) Css Module</h2>
        <div className="container">
          <Box></Box>
        </div>
        <div className="container">
          <CheckBox onChange={onChange} checked={check}>
            다음 약관에 모두 동의
          </CheckBox>
          <p>
            <b>Check : </b>
            {check ? "true" : "false"}
          </p>
        </div>
      </section>

      <section>
        <h2>3) Styled Components</h2>
        <Circle color="pink" huge />
      </section>
    </div>
  );
}

export default App;
