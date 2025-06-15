import { useState } from "react";
import "./dropdown.css";
export default function Dropdown() {
  const options = [
    "All Categories",
    "Groceries",
    "Electronics",
    "Clothing",
    "Books",
  ];
  const [selected, setSelected] = useState();
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className="dropdown">
      <select id="dropdown-select" value={selected} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
