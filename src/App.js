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
    </div>
  );
}

export default App;
