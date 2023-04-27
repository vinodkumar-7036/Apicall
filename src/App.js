import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
      response.json().then((json) => setData(json))
    );
  }, []);
  const PreviousPerson = () => {
    setNumber(number - 1);
  };
  const UpdatePerson = () => {
    console.log(":::::", UpdatePerson);
    setNumber(number + 1);
  };
  // const [data, setData] = useState([]);
  // // const [joke, setJoke] = useState("");
  // useEffect(() => {
  //   fetch("https://reqres.in/api/products/3")
  //     .then((data) => data.json())
  //     .then((result) => setData(result.support));
  // });
  // const getJoke = (data) => {
  //   console.log("::::>", data);
  //   fetch("https://official-joke-api.appspot.com/jokes/programming/random")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJoke(data[0].setup + data[0].punchline);
  //     });
  // };
  return (
    <div>
      {/* api Call<button onClick={getJoke}>getJokeRightNow</button>
      {joke} */}
      {/* {/* <h1>Get Api</h1> */}
      <h2>
        <span>Name:</span>
        {data.length && data[number].postId}
      </h2>
      <button onClick={PreviousPerson}>Previous</button>
      <button disabled={number >= 499} onClick={UpdatePerson}>
        Next
      </button>
      {/* <h2>{data.text}</h2>
        <h1>{data.url}</h1> */}
    </div>
  );
}

export default App;
