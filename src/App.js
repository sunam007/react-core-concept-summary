import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      {/*  <Counter></Counter> */}
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h3>Load Comments</h3>
      {comments.map((comment) => (
        <Comments
          name={comment.name}
          email={comment.email}
          body={comment.body}
        ></Comments>
      ))}
    </div>
  );
}

function Comments(props) {
  return (
    <div className="container">
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
      <h5>Post: {props.body}</h5>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
