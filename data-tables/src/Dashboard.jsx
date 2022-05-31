import React, { useCallback, useEffect, useState } from "react";
import DataTable from "./Table";
import InfiniteScroll from "./InfinteScrollComponent";
import {
  tableColumnTransform,
  tableDataTransform,
} from "./utils/tableTransform";

const Dashboard = ({ data, onScroll }) => {
  const [tableRows, setTableRows] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  useEffect(() => {
    //convertion of data to required row format
    setTableRows(tableDataTransform(data));
    //convertion of data to required column format
    setTableColumns(tableColumnTransform());
  }, [data]);

  //on rowclick function
  const onRowClick = useCallback((item, index) => {
    console.debug("rowClick", item, index);
  }, []);

  //on checkbox selection
  const onSelectionChange = (value) => {
    console.debug(value);
  };

  return (
    <div>
      <DataTable
        columns={tableColumns}
        rows={tableRows}
        onRowClick={onRowClick}
        onSelectionChange={onSelectionChange}
      />
      <InfiniteScroll onScroll={onScroll} />
    </div>
  );
};

export default Dashboard;
