import React, { useState } from "react";

const SearchableDropdown = ({ options, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [filteredOptions, setFilteredOptions] = useState(options); // Filtered options
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredOptions(
      options.filter((option) => option.name.toLowerCase().includes(value))
    );
  };

  // Toggle dropdown visibility
  //   const toggleDropdown = () => {
  //     setIsDropdownOpen(!isDropdownOpen);
  //   };

  // Handle selection
  const handleSelect = (option) => {
    setSearchTerm(option.name);
    setIsDropdownOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => {
          setTimeout(() => {
            setIsDropdownOpen(false);
          }, 300);
        }}
        // onClick={toggleDropdown}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          style={{
            padding: "8px",
            marginTop: "5px",
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "#fff",
            zIndex: 1000,
          }}
        >
          <ul
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              listStyleType: "none",
            }}
            onBlur={() => setIsDropdownOpen(false)}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
                  onMouseLeave={(e) => (e.target.style.background = "#fff")}
                >
                  {option.name}
                </li>
              ))
            ) : (
              <li
                style={{
                  padding: "8px",
                  color: "#888",
                  textAlign: "center",
                }}
              >
                No options found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
