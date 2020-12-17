import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [show,setShow] = useState(true)
  const [comment, setComment] = useState();

  useEffect(()=>{
    fetch("http://localhost:5000/user-comment",{
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type":"application/json",
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      setComment(data)
    })
  },[])

 

  return (
    <div className="App">
      <h1>Hello Comment App</h1>

      <form action="http://localhost:5000/user-comment" method="post">
      <div className="form_group" 
      style={{
        animationName:show ? "slide_right" :"slide_left"
      }}
      >
      <span className="add_button"
      onClick={()=>{
        setShow(!show)
      }}
      >Add</span>

        <input
          type="text"
          placeholder="masukan username"
          name="username"
        />

        <textarea
          type="text"
          placeholder="masukan pesan"
          name="body"
        />

        <button>
          submit
        </button>
      </div>

      <>
      {comment ? 
      (<div className="container-card">
        {comment.map((e) => {
        return <Card username={e.username} body={e.body} />;
        })}
      </div>)
      :
      
      (
        <h1>gagal</h1>
      )}
      
      </>
      </form>
    </div>
  );
}

export default App;
