import { useEffect, useState } from "react";

const Checkbox = ({ value = false, selectAll, onChange }) => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (selectAll) {
      setStatus(true);
    } else {
      setStatus(value);
    }
  }, [value, selectAll]);

  const onStatusChange = () => {
    onChange(!status);
    setStatus((state) => !state);
  };

  return (
    <input
      type="checkbox"
      checked={status}
      onChange={(e) => {
        e.stopPropagation();
        onStatusChange();
      }}
    />
  );
};

export default Checkbox;
