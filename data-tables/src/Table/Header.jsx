const Header = ({ columns, onSelectAll, selectAll }) => {
  return (
    <thead>
      <tr>
        {columns.map((item) => {
          return (
            <th
              className="px-8 py-4 bg-blue-100 border cursor-pointer"
              key={item.id}
            >
              {item.id === "checkbox" ? (
                <input
                  type="checkbox"
                  onChange={(e) => {
                    e.stopPropagation();
                    onSelectAll();
                  }}
                  checked={selectAll}
                />
              ) : (
                item.label
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Header;
