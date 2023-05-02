import { ExcelSheets } from "@/models";
import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";

interface Props {
  onFileUploaded: (data: ExcelSheets) => void
}

export const ExcelReader = ({ onFileUploaded }: Props) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [sheetData, setSheetData] = useState<ExcelSheets>();

  const acceptedFiles = ["xlsx", "xls"];

  const fileRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  let mySheetData: ExcelSheets;

  const checkFileName = (name: string): Boolean => {
    if (!name) return false;
    return acceptedFiles.includes(name.split(".").pop().toLowerCase());
  };

  const readDataFromFile = (data: ArrayBuffer) => {
    
    const workbook = XLSX.read(data, {type: 'binary',cellDates: true });
    setSheetNames(workbook.SheetNames);

    workbook.SheetNames.forEach((sheetName) => {
      const workSheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(workSheet);
      mySheetData[sheetName] = jsonData;
    });

    setSheetData(mySheetData);
    return mySheetData;
  };

  const handleFile = async (e: any) => {
    const myFile = e.target.files[0];
    if (!myFile) return;

    if (!checkFileName(myFile.name)) {
      alert("Invalid file type");
      return;
    }

    const data: ArrayBuffer = await myFile.arrayBuffer();
    const mySheetData = readDataFromFile(data);

    setFile(myFile);
    setFileName(myFile.name);
    onFileUploaded(mySheetData);
  };

  const hanldeRemove = () => {
    setFile(null);
    setFileName(null);
    fileRef.current.value = "";
  };

  return (
    <>
      <div>
        {fileName && <label>File name: {fileName}</label>}
        {!fileName && <label>Please upload a file</label>}
      </div>
      <div>
        <input
          type="file"
          accept="xlsx, xls"
          multiple={false}
          onChange={(e) => handleFile(e)}
          placeholder="Select Excel"
          ref={fileRef}
        />
        {fileName && (
          <button className="deleteButton" onClick={hanldeRemove}>
            x
          </button>
        )}
      </div>
    </>
  );
};
