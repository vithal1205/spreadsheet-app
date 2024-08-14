import React, { useState } from "react";

const Spreadsheet = () => {
  const [gridData, setGridData] = useState({});

  const handleCellChange = (row, col, value) => {
    setGridData({
      ...gridData,
      [`${row}-${col}`]: value,
    });
  };

  const renderCell = (row, col) => {
    const cellId = `${row}-${col}`;
    return (
      <input
        key={cellId}
        value={gridData[cellId] || ""}
        onChange={(e) => handleCellChange(row, col, e.target.value)}
        className="border p-2 w-24 h-10 text-center"
      />
    );
  };

  const renderRow = (row) => {
    const cells = [];
    for (let col = 0; col < 10; col++) {
      cells.push(renderCell(row, col));
    }
    return (
      <div key={row} className="flex">
        {cells}
      </div>
    );
  };

  const renderGrid = () => {
    const rows = [];
    for (let row = 0; row < 20; row++) {
      rows.push(renderRow(row));
    }
    return <div>{rows}</div>;
  };

  return <div className="p-4">{renderGrid()}</div>;
};

export default Spreadsheet;
