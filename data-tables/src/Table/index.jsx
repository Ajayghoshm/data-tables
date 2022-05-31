import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";

const DataTable = ({ columns, rows, onRowClick, onSelectionChange }) => {
  const [selectAll, setSelectAll] = useState(false);

  const onSelectAll = () => {
    onSelectionChange("All", !selectAll);
    setSelectAll((state) => !state);
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
        onSelectionChange={onSelectionChange}
        selectAll={selectAll}
      />
    </table>
  );
};

export default DataTable;
