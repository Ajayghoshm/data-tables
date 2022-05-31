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

  //for select all checkbox in the header
  const onSelectAll = (value) => {
    //on selection
    if (value) {
      let idArray = rows.map((item) => {
        return item.id;
      });
      setSelectedRows(idArray);
      onSelectionChange("All");
    }
    //on selection removal
    else {
      setSelectedRows([]);
      onSelectionChange([]);
    }
    setSelectAll(value);
  };

  //for each individual item checkbox
  const oneachSelectionChange = (currentitem, index, status) => {
    let newArray = JSON.parse(JSON.stringify(selectedRows));
    //on selection
    if (status === true) {
      console.debug("adding");
      newArray = [...newArray, currentitem.id];
      setSelectedRows(newArray);
    }
    // on removal of selection
    else if (status === false) {
      console.debug("removal");
      newArray = newArray.filter((item) => {
        return item !== currentitem.id;
      });
      setSelectedRows(newArray);
      if (selectAll) {
        setSelectAll(false);
      }
    }
    //external function call
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
