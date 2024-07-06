import CheckTableStore from "./components/CheckTableStore";

import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import { columnsDataStore } from "./variables/columnsData";
import { ToastContainer } from "react-toastify";
import { useStoreApi } from "./components/StoreApi/useStoreApi";
import { columnsDataCategory } from "./variables/columnsData";
const Tables = () => {
  const StoreList = useStoreApi();
 
  const name = [
    { name: "Stores", data: StoreList },    
  ]
  console.log(StoreList);
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols">
        {name.map((data, index) => (
          <CheckTableStore
            name={data.name}
            index={index}
            columnsData={columnsDataStore}
            tableData={data.data}
          />
        ))}{" "}
      </div>
      {/* <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns} </div>
      />*/}
      {/* <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        {nameType.map((data, index) => (
          <ComplexTable
            name={data.name}
            columnsData={data.name === "Type" ? columnsDataComplex : columnsDataCategory}
            tableData={data.data}
          />
        ))}
      </div> */}
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Tables;
