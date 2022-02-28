import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import { Overview } from "../types";

interface TableProps {
  overviews: Overview[];
}

const OverviewTable: React.FC<TableProps> = ({ overviews }) => {
  const sortableCols = useMemo(
    () => ["date_added", "category.name", "user.username", "project_title"],
    []
  );
  const columns = useMemo(
    () =>
      Object.keys(overviews[0]).map((colName) => ({
        name: colName,
        selector: (row: any) => row[colName],
        sortable: sortableCols.includes(colName),
      })),
    [overviews, sortableCols]
  );

  return (
    <DataTable
      columns={columns}
      data={overviews}
      pagination
      paginationPerPage={2}
    />
  );
};
export default OverviewTable;
