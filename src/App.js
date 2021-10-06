import React, { useState } from "react";

import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [inputText, setInputText] = useState("");
  const [expand, setExpand] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [category, setCategory] = useState([]);
  const [catInput, setCatInput] = useState("");

  function handleDelete(id) {
    setState((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function handleCatChange(event) {
    const { value } = event.target;
    setCatInput(value);
  }
  function handleChange(event) {
    const { value } = event.target;
    setInputText(value);
  }

  function handleCatClick() {
    setCategory((prevItemss) => {
      return [...prevItemss, catInput];
    });
    setCatInput("");
  }

  return (
    <>
      <div>
        <input value={catInput} onChange={handleCatChange}></input>
        <button onClick={handleCatClick}>add cate</button>

        <h1> {category.map((value) => console.log(value))}</h1>

        <p>above code is not working properly 🔺</p>
        <button
          onClick={() => {
            setExpand(true);

            // console.log(expand);
          }}
        >
          +
        </button>
      </div>
      {state.map((value, index) => (
        <>
          <ul style={{ listStyleType: "none" }}>
            <li key={index}>
              {" "}
              {value} <button onClick={() => handleDelete(index)}>❌</button>
              <button
                onClick={() => {
                  setExpand(true);
                  setEdit(true);

                  setInputText(value);
                  setEditValue({ id: index, title: value });
                }}
              >
                ➖
              </button>
            </li>
          </ul>
        </>
      ))}
      {expand && (
        <div>
          <input
            autoFocus
            autoComplete="off"
            placeholder="Enter here"
            name="name"
            onChange={handleChange}
            value={inputText}
          ></input>
          <button
            onClick={() => {
              if (edit) {
                console.log("edited");

                let arr = state;
                // console.log(arr);
                arr[editValue.id] = inputText;
                // console.log(editValue);
                // console.log(inputText);
                // console.log(arr);
                setState(arr);
                setExpand(false);
                setEdit(false);
              } else {
                setState((prevValue) => {
                  return [...prevValue, inputText];
                });
              }

              setExpand(false);
              setInputText("");
            }}
          >
            +
          </button>
        </div>
      )}
    </>
  );
}

export default App;
