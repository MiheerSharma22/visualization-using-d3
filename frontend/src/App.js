import { useEffect, useState } from "react";
import getData from "./service-calls/getData";
import Navbar from "./components/Navbar";
import ScatterPlot from "./components/ScatterPlot";
import DoughnutPlot from "./components/DoughnutPlot";
import Spinner from "./components/Spinner";

function App() {
  const [data, setData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  async function fetchData() {
    setShowSpinner(true);
    const response = await getData();
    const dataArray = await response.json();
    setData(dataArray.data);
    setShowSpinner(false);
  }

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className={`bg-[#2f3349] min-w-screen min-h-screen py-[1rem] flex flex-col gap-[2rem] ${
        showSpinner ? "items-center gap-[16rem]" : ""
      }`}
    >
      <Navbar />
      {showSpinner ? (
        <Spinner />
      ) : (
        <>
          <ScatterPlot data={data} width={700} height={500} />
          <DoughnutPlot data={data} width={700} height={500} />
        </>
      )}
    </div>
  );
}

export default App;
