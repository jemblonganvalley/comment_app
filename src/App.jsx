import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
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

      <div className="form_group">
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

      {comment.map((e) => {
        return <Card username={e.username} body={e.body} />;
      })}
    </div>
  );
}

export default App;
