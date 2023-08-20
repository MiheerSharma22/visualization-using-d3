import { useEffect } from "react";
import "./App.css";
import getData from "./service-calls/getData";

function App() {
  let data;

  async function fetchData() {
    const response = await getData();
    data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="text-4xl font-bol text-blue-600 text-center">
      Hi this is assignment of blackcoffer
    </div>
  );
}

export default App;
