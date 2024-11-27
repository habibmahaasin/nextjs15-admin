"use client";
import {
  EXAMPLE_TABLE_COL,
  EXAMPLE_TABLE_DATA,
} from "@/utils/constant/exampleTableData";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false,
});

const TableFragment = () => {
  const headerStyles = {
    headCells: {
      style: {
        backgroundColor: "#4A90E2",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 0,
      },
    },
  };

  return (
    <div className="m-2">
      <DataTable
        title={<div className="font-bold text-sm">Example Table</div>}
        columns={EXAMPLE_TABLE_COL}
        data={EXAMPLE_TABLE_DATA}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        fixedHeader
        // fixedHeaderScrollHeight="300px"
        highlightOnHover
        pointerOnHover
        responsive
        selectableRows
        selectableRowsHighlight
        sortIcon={<Icon icon="icon-park-solid:sort" className="ml-2" />}
        // subHeader
        // subHeaderComponent={
        //   <div
        //     style={{ textAlign: "left", width: "100%", marginLeft: "-10px" }}
        //   >
        //     <strong>Example Table</strong>
        //   </div>
        // }
        subHeaderAlign="left"
        subHeaderWrap
        customStyles={headerStyles}
      />
    </div>
  );
};

export default TableFragment;
