import { useEffect } from "react";
import "./App.css";
import getData from "./service-calls/getData";
import Navbar from "./components/Navbar";

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
    <div className="bg-[#2f3349] min-w-screen min-h-screen py-[1rem] flex flex-col gap-[4rem]">
      <Navbar />
    </div>
  );
}

export default App;
