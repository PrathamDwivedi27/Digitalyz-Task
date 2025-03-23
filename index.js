const xlsx = require("xlsx");
const fs = require("fs");
const cleanData = require("./cleanData");

const workbook = xlsx.readFile("dataset.xlsx");


const rawSheets = {
  lecturerDetails: xlsx.utils.sheet_to_json(workbook.Sheets["Lecturer Details"]),
  roomData: xlsx.utils.sheet_to_json(workbook.Sheets["Rooms data"]),
  courseList: xlsx.utils.sheet_to_json(workbook.Sheets["Course list"]),
  studentRequests: xlsx.utils.sheet_to_json(workbook.Sheets["Student requests"]),
};

const cleanedData = {
  lecturerDetails: cleanData(rawSheets.lecturerDetails, "lecturerDetails"),
  roomData: cleanData(rawSheets.roomData, "roomData"),
  courseList: cleanData(rawSheets.courseList, "courseList"),
  studentRequests: cleanData(rawSheets.studentRequests, "studentRequests"),
};

Object.keys(cleanedData).forEach((sheetName) => {
  fs.writeFileSync(`Cleaned ${sheetName}.json`, JSON.stringify(cleanedData[sheetName], null, 2));
});

console.log("✅ Data cleaning complete! Cleaned JSON files saved.");
