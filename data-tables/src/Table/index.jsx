import React, { useCallback, useState } from "react";
import Body from "./Body";
import Header from "./Header";

const DataTable = ({
  columns = [],
  rows = [],
  onRowClick = () => {},
  onSelectionChange = () => {},
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [currentSelectAll, setCurrentSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const onSelectAll = (value) => {
    onSelectionStateChange("All", value);
    setSelectAll(value);
    setCurrentSelectAll(value);
  };

  const oneachSelectionChange = (item, index, status) => {
    onSelectionStateChange(item);
    if (!status && selectAll) {
      setCurrentSelectAll(false);
    }
  };

  const onSelectionStateChange = useCallback((value) => {
    if (value === "All") {
      setSelectedRows(rows);
      onSelectionChange("All");
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
      let idArray = newArray.map((item) => {
        return item.id;
      });
      onSelectionChange(idArray);
    }
  }, []);

  return (
    <table className="bg-white shadow-lg">
      <Header
        columns={columns}
        onSelectAll={onSelectAll}
        selectAll={selectAll}
        currentSelectAll={currentSelectAll}
      />
      <Body
        columns={columns}
        onRowClick={onRowClick}
        rows={rows}
        onSelectionChange={oneachSelectionChange}
        selectAll={selectAll}
      />
    </table>
  );
};

export default DataTable;
