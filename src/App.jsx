import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState([
    {
      id: 1,
      username: "fadliselaz",
      body: "test",
    },
    {
      id: 2,
      username: "evalia",
      body: "test",
    },
    {
      id: 3,
      username: "selva",
      body: "test",
    },
    {
      id: 4,
      username: "alif",
      body: "test",
    },
  ]);

  const [inputdata, setInputData] = useState({
    username: "",
    body: "",
  });

  return (
    <div className="App">
      <h1>Hello Comment App</h1>

      <div
        className="form_group"
        style={{
          animationName: show ? "slide_right" : "slide_left",
        }}
      >
        <span
          className="add_button"
          onClick={() => {
            setShow(!show);
          }}
        >
          add
        </span>
        <input
          type="text"
          placeholder="masukan username"
          onChange={(e) => {
            setInputData({
              ...inputdata,
              username: e.target.value,
            });
          }}
        />

        <textarea
          type="text"
          placeholder="masukan pesan"
          onChange={(e) => {
            setInputData({
              ...inputdata,
              body: e.target.value,
            });
          }}
        />

        <button
          onClick={() => {
            setComment([...comment, inputdata]);
          }}
        >
          submit
        </button>
      </div>

      <div className="container_card">
        {comment.map((e) => {
          return <Card username={e.username} body={e.body} />;
        })}
      </div>
    </div>
  );
}

export default App;
