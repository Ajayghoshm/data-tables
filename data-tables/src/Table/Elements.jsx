import React from "react";

const Element = ({ item, column }) => {
  const width = column.width;
  const textAlign = column.numeric ? "right" : "center";

  if (React.isValidElement(item)) {
    return (
      <td className="px-4" style={{ textAlign: textAlign }}>
        <div style={{ width: width }}>{item}</div>
      </td>
    );
  } else if (typeof item === "number" || typeof item === "string") {
    return (
      <td className="px-4" style={{ textAlign: textAlign }}>
        <div style={{ width: width }}>{item}</div>
      </td>
    );
  } else {
    return <td>Undefined</td>;
  }
};

export default Element;
