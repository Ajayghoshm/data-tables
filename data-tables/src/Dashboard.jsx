import React, { useEffect, useState } from "react";
import {
  tableColumnTransform,
  tableDataTransform,
} from "./utils/tableTransform";
import useScrolhook from "./utils/useScroll";

const Dashboard = ({ data, onScroll }) => {
  const [tableRows, setTableRows] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);

  const { loaderRef } = useScrolhook(onScroll);

  useEffect(() => {
    setTableRows(tableDataTransform(data));
    setTableColumns(tableColumnTransform());
  }, [data]);

  return (
    <div>
      <table>
        <thead>
          {tableColumns.map((item) => {
            return <th>{item.label}</th>;
          })}
        </thead>
        <tbody>
          {tableRows.map((item) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img src={item.image} width="50px" height="50px" />
                </td>
                <td>{item.title}</td>
              </tr>
            );
          })}
          <div ref={loaderRef}></div>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
