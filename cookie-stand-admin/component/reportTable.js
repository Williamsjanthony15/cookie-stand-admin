import { useState } from "react";
import CreateForm from "./createForm";
import hours from "../pages/data";

export default function ReportTable(props) {
  const [storeData, setStoreData] = useState("No Cookie Stands Available ");

  return (
    <>
      {/* <CreateForm /> */}
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        {/* <table>
          <td>{hours}</td>
        </table> */}
        <p>{hours}</p>
        <p className="m-8">{storeData}</p>
      </main>
    </>
  );
}
