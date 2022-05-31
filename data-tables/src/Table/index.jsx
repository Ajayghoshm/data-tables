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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectAll = useCallback(
    (value) => {
      onSelectionStateChange("All", value);
      setSelectAll(value);
      setCurrentSelectAll(value);
    },
    [onSelectionStateChange]
  );

  const oneachSelectionChange = useCallback((item, index, status) => {
    onSelectionStateChange(item);
    if (!status && selectAll) {
      setCurrentSelectAll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
