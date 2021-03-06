import { useEffect, useState } from "react";
import { photosApi } from "./apis/photos";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [completeData, setCompleteData] = useState([]);
  const [pageSize] = useState(50);
  const [currentPage, setCurrentPage] = useState(0);

  //api call
  const ApiCall = async () => {
    setLoading(true);
    let data = await photosApi();
    setCompleteData(data);
    let intialData = data.slice(
      currentPage * pageSize,
      pageSize * currentPage + pageSize
    );
    setData(intialData);
    setLoading(false);
  };

  //infinte scroll function
  const onScroll = () => {
    let newPage = currentPage + 1;
    let index = newPage * pageSize;
    setCurrentPage(newPage);
    let pageData = completeData.slice(index, index + pageSize);
    setData((state) => [...state, ...pageData]);
  };

  useEffect(() => {
    ApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          loading
        </div>
      ) : (
        <div className="flex justify-center">
          <Dashboard onScroll={onScroll} data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
