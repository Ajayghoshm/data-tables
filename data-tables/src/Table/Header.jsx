const Header = ({ columns, onSelectAll, selectAll, currentSelectAll }) => {
  return (
    <thead>
      <tr>
        {columns.map((item) => {
          return (
            <th
              className="px-8 py-4 bg-blue-100 border cursor-pointer"
              key={item.id}
              style={{ width: item.width }}
            >
              {item.id === "checkbox" ? (
                <input
                  type="checkbox"
                  data-testid="all-checkbox"
                  onChange={(e) => {
                    e.stopPropagation();
                    onSelectAll(e.target.checked);
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
