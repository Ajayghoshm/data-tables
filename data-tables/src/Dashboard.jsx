import React, { useEffect, useState } from "react";
import DataTable from "./Table";
import InfiniteScroll from "./InfinteScrollComponent";
import {
  tableColumnTransform,
  tableDataTransform,
} from "./utils/tableTransform";

const Dashboard = ({ data, onScroll }) => {
  const [tableRows, setTableRows] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const [selectedRows, setSelectedRows] = useState([]);

  const selectAllFunction = () => {
    setSelectedRows(data);
  };

  const onSelectionChange = (value) => {
    if (value === "All") {
      setSelectedRows(data);
    } else {
      let index = selectedRows.findIndex((item) => {
        return item.id === value.id;
      });
      let newArray = [...selectedRows];
      if (index === -1) {
        newArray.push(value);
      } else {
        newArray = newArray.filter((item) => {
          return item.id !== value.id;
        });
      }
      setSelectedRows(newArray);
    }
  };

  useEffect(() => {
    setTableRows(tableDataTransform(data, onSelectionChange));
    setTableColumns(tableColumnTransform(selectAllFunction));
  }, [data]);

  const onRowClick = (item, index) => {
    console.debug("Row Clicked", item, index);
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
