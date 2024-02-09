import { ReactNode } from "react";
import { TableBody } from "./TableBody";
import { TableHeaders } from "..";
import React from "react";
import { Loading } from "../Loadings/NormalLoading";

interface TableProps {
  headers: string[];
  children: ReactNode;
  isLoading?: boolean;
}
export const Table = ({ headers, isLoading, children }: TableProps) => {
  return (
    <div className="w-full h-full">
      <table className=" table-auto text-start w-full h-full text-blue-001 mx-4">
        <TableHeaders headers={headers} />
        <TableBody>{children}</TableBody>
      </table>
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};
