import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Click me</Button>
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
    </div>
  );
}

export default App;
