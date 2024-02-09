import React from "react";

interface TableTextProps {
  children: React.ReactNode;
}
export const TableText = ({ children }: TableTextProps) => {
  return <td className="overflowTdTable">{children}</td>;
};
