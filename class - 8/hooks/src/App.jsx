import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("vijay");
  // let name = "vijay";

  useEffect(() => {
    console.log("Component Mounted...!");

    return () => {
      console.log("Component Unmounted...!");
    };
  }, [name]);

  return (
    <div className="App">
      <h1>{name}</h1>

      <button
        onClick={() => {
          // name = "anand";
          // setName(() => {
          //   return "anand";
          // });
          setName("anand");

          // console.log("Name: ", name);
        }}
      >
        change
      </button>
    </div>
  );
}

export default App;
