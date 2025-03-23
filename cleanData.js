const fs = require("fs");

// Load rules
const rules = JSON.parse(fs.readFileSync("rules.json"));

const cleanData = (data, type) => {
  return data.flatMap((entry) => {
    let cleanedEntry = {};

    switch (type) {
      case "lecturerDetails":
        cleanedEntry = {
          lecturerId: entry["Lecturer ID"] || null,
          // lectureTitle: entry["Lecture Title"]?.trim() || "",
          lectureCode: entry["lecture Code"]?.trim().toUpperCase() || "",
          length: Number(entry["Length"]) || rules.defaultValues.length,
          startTerm: entry["Start Term"] || "",
          sectionNumber: entry["Section number"] || "",
        };
        break;

      case "roomData":
        cleanedEntry = {
          // courseTitle: entry["Course Title"]?.trim() || "",
          sectionNumber: entry["Section number"] || "",
          year: entry["Year"]?.trim() || "2024-2025",
        //   termDescription: entry["Term Description"] || "",
          professorId: entry["prof ID"] || null,
          lectureId: entry["lecture ID"] || null,
          courseCode: entry["Course Code"]?.toUpperCase() || "",
          // courseLength: Number(entry["Course Length"]) || 0,
          termName: entry["Term name"].includes("1") ? "1" : "2",
          roomNumber: entry["Room Number"] || "",
        };
        break;

      case "courseList":
        courseCode= entry["Course code"]?.toUpperCase() || ""
        cleanedEntry = {
          
          [courseCode]:{title: entry["Title"]?.trim() || "null",
          length: Number(entry["Length"]) || rules.defaultValues.length,
          priority: entry["Priority"] || rules.defaultValues.priority,
          availableBlocks: entry["Available blocks"]
            ? entry["Available blocks"].split(",").map((b) => b.trim())
            : [],
          unavailableBlocks: entry["Unavailable blocks"]
            ? entry["Unavailable blocks"].split(",").map((b) => b.trim())
            : [],
          minSectionSize: Number(entry["Minimum section size"]) || 0,
          targetSectionSize: Number(entry["Target section size"]) || 0,
          maxSectionSize: Number(entry["Maximum section size"]) || 0,
          numSections: Number(entry["Number of sections"]) || 0,
          totalCredits: Number(entry["Total credits"]) || rules.defaultValues.credits,
        }};
        break;

      case "studentRequests":
        cleanedEntry = {
          collegeYear: entry["College Year"]
            ? entry["College Year"].includes("1st")
              ? 1
              : entry["College Year"].includes("2nd")
              ? 2
              : entry["College Year"].includes("3rd")
              ? 3
              : entry["College Year"].includes("4th")
              ? 4
              : NaN
            : NaN,
          requestStartTerm: entry["Request start term"].includes("First")
            ? 1
            : entry["Request start term"].includes("Second")
            ? 2
            : entry["Request start term"].includes("Any")
            ? -1
            : NaN,
          requestType: entry["Type"] === "Required" 
            ? 1 
            : entry["Type"] === "Requested" 
            ? 2 
            : entry["Type"] === "Recommended" 
            ? 3
            : NaN,
          studentId: entry["student ID"] || "",
          courseId: entry["Course ID"] || "",
          length: Number(entry["Length"]) || rules.defaultValues.length,
          courseCode: entry["Course code"]?.toUpperCase() || "",
          department: entry["Department(s)"]?.trim() || "",
          credits: Number(entry["Credits"]) || rules.defaultValues.credits,
        };
        break;
    }

    return cleanedEntry;
  });
};

module.exports = cleanData;
