import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <h1>Hello Comment App</h1>
      <Card username="fadli" body="sexy" />
      <Card username="ayu utami" body="unforgotable ex-girl friend" />
    </div>
  );
}

export default App;
