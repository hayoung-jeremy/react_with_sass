import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import Box from "./components/Box";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import StyledButton from "./components/StyledButton";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          pink: "#ffadad",
          gray: "#444",
        },
      }}
    >
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
          <div className="container">
            <StyledButton color="blue" size="large">
              BUTTON
            </StyledButton>
            <StyledButton color="blue" size="medium">
              BUTTON
            </StyledButton>
            <StyledButton color="blue" size="small">
              BUTTON
            </StyledButton>
          </div>
          <div className="container">
            <StyledButton color="pink" size="large">
              BUTTON
            </StyledButton>
            <StyledButton color="pink" size="medium">
              BUTTON
            </StyledButton>
            <StyledButton color="pink" size="small">
              BUTTON
            </StyledButton>
          </div>
          <div className="container">
            <StyledButton color="gray" size="large">
              BUTTON
            </StyledButton>
            <StyledButton color="gray" size="medium">
              BUTTON
            </StyledButton>
            <StyledButton color="gray" size="small">
              BUTTON
            </StyledButton>
          </div>
          <div className="container">
            <StyledButton color="blue" size="large" outline>
              BUTTON
            </StyledButton>
            <StyledButton color="pink" size="medium" outline>
              BUTTON
            </StyledButton>
            <StyledButton color="gray" size="small" outline>
              BUTTON
            </StyledButton>
          </div>
          <div className="container">
            <StyledButton color="blue" size="large" fullWidthStyle>
              BUTTON
            </StyledButton>
            <StyledButton color="pink" size="large" fullWidthStyle>
              BUTTON
            </StyledButton>
            <StyledButton color="gray" size="large" fullWidthStyle>
              BUTTON
            </StyledButton>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
