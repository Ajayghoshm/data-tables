import Checkbox from "./Checkbox";
import Element from "./Elements";

const Body = ({ rows, columns, onRowClick, onSelectionChange, selectAll }) => {
  return (
    <tbody>
      {rows.map((rowitem, index) => {
        return (
          <tr
            className="hover:bg-gray-50"
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              onRowClick(rowitem, index);
            }}
          >
            {columns.map((columnItem, index) => {
              if (columnItem.id === "checkbox") {
                return (
                  <td key={index} onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      onChange={() => {
                        onSelectionChange(rowitem, index);
                      }}
                      selectAll={selectAll}
                    />
                  </td>
                );
              } else {
                return (
                  columnItem.id !== "id" && (
                    <Element
                      item={rowitem[columnItem.id]}
                      column={columnItem}
                      key={index}
                    />
                  )
                );
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Body;
