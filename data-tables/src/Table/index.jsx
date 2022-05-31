import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";

const DataTable = ({
  columns = [],
  rows = [],
  onRowClick = () => {},
  onSelectionChange = () => {},
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const onSelectAll = (value) => {
    if (value) {
      let idArray = rows.map((item) => {
        return item.id;
      });
      setSelectedRows(idArray);
      onSelectionChange("All");
    } else {
      setSelectedRows([]);
      onSelectionChange([]);
    }
    setSelectAll(value);
  };

  const oneachSelectionChange = (currentitem, index, status) => {
    let newArray = JSON.parse(JSON.stringify(selectedRows));
    if (status === true) {
      console.debug("adding");
      newArray = [...newArray, currentitem.id];
      setSelectedRows(newArray);
    } else if (status === false) {
      console.debug("removal");
      newArray = newArray.filter((item) => {
        return item !== currentitem.id;
      });
      setSelectedRows(newArray);
      if (selectAll) {
        setSelectAll(false);
      }
    }
    onSelectionChange(newArray);
  };

  return (
    <table className="bg-white shadow-lg">
      <Header
        columns={columns}
        onSelectAll={onSelectAll}
        selectAll={selectAll}
      />
      <Body
        columns={columns}
        onRowClick={onRowClick}
        rows={rows}
        onSelectionChange={oneachSelectionChange}
        selectedRows={selectedRows}
      />
    </table>
  );
};

export default DataTable;
