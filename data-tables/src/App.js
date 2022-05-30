import { useEffect, useState } from "react";
import { photosApi } from "./apis/photos";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [completeData, setCompleteData] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const ApiCall = async () => {
    setLoading(true);
    console.debug("Api call");
    let data = await photosApi();
    console.debug("Api call", data);
    setCompleteData(data);
    let intialData = data.slice(
      currentPage * pageSize - pageSize,
      pageSize * currentPage
    );
    console.debug("intialData", intialData);
    setData(intialData);
    setLoading(false);
  };

  const onScroll = () => {
    setCurrentPage((state) => state + 1);
    let pageData = data.slice(
      currentPage + 1 * pageSize - pageSize,
      pageSize * currentPage + 1
    );
    setData(pageData);
  };

  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>loading</div>
      ) : (
        <Dashboard onScroll={onScroll} data={data} />
      )}
    </div>
  );
}

export default App;
