import { useEffect, useState } from "react";
import "./App.css";
import getData from "./service-calls/getData";
import Navbar from "./components/Navbar";
import ScatterPlot from "./components/ScatterPlot";
import DoughnutPlot from "./components/DoughnutPlot";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await getData();
    const dataArray = await response.json();
    setData(dataArray.data);
  }

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="bg-[#2f3349] min-w-screen min-h-screen py-[1rem] flex flex-col gap-[2rem]">
      <Navbar />
      <ScatterPlot data={data} width={700} height={500} />
      <DoughnutPlot data={data} width={700} height={500} />
    </div>
  );
}

export default App;
