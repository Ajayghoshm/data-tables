import { useEffect, useState } from "react";

const Checkbox = ({ value, onChange }) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(value);
  }, [value]);

  const onStatusChange = (value) => {
    onChange(value);
    setStatus(value);
  };

  return (
    <input
      data-testid="individual-checkbox"
      type="checkbox"
      checked={status}
      onChange={(e) => {
        e.stopPropagation();
        onStatusChange(e.target.checked);
      }}
    />
  );
};

export default Checkbox;
