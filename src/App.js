import "./App.scss";
import Box from "./components/Box";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <section>
        <h2>1) buttons</h2>
        <div className="buttons">
          <Button size="large" onClick={() => console.log("clicked!")}>
            Click me
          </Button>
          <Button>Click me</Button>
          <Button size="small">Click me</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="gray">
            Click me
          </Button>
          <Button color="gray">Click me</Button>
          <Button size="small" color="gray">
            Click me
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" color="blue">
            Click me
          </Button>
          <Button color="blue">Click me</Button>
          <Button size="small" color="blue">
            Click me
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" color="blue" outline>
            Click me
          </Button>
          <Button outline>Click me</Button>
          <Button size="small" color="gray" outline>
            Click me
          </Button>
        </div>
        <div className="buttons">
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
        <Box></Box>
      </section>
    </div>
  );
}

export default App;
