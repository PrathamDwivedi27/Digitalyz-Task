const fs=require("fs");

const courseData=JSON.parse(fs.readFileSync("course_list.json"));
const studentData=JSON.parse(fs.readFileSync("Cleaned studentRequests.json"));
// console.log(courseData)

// Check if student course code is valid
// for (let i=0; i< studentData.length;i++){
//     let studentCourse=studentData[i].courseCode;
//     let studentCredits=studentData[i].credits;

//     if (! (studentCourse in courseData)){
//         console.log("Student "+studentData[i].studentId+" has an invalid course code "+studentCourse);
//     }
//     else if(courseData[studentCourse]['Total credits']!=studentCredits){
//         console.log("Student "+studentData[i]+" has incorrect credits for course "+studentCourse);
//     }

// }

// Check if every course has section assigned 

// console.log(Object.keys(courseData).length);
// for (let i=0;i<Object.keys(courseData).length;i++){
//     let course=Object.keys(courseData)[i];
//     if (courseData[course]['Number of sections']==0){
//         console.log("Course "+course+" has no sections assigned");
//     }
// }

// // Check if every course has a credit value
// for (let i=0;i<Object.keys(courseData).length;i++){
//     let course=Object.keys(courseData)[i];
//     if (courseData[course]['Total credits']==0){
//         console.log("Course "+course+" has no credits assigned");
//     }
// }

// Check what subjects are taught by each professor
const lectureDetails=JSON.parse(fs.readFileSync("Cleaned lecturerDetails.json"));

// // console.log(lectureDetails);
// const professorSubjects={};
// for (let i = 0; i < lectureDetails.length; i++) {
//     let lecturerId = lectureDetails[i].lecturerId;
//     let courseCode = lectureDetails[i].lectureCode;

//     if (!professorSubjects[lecturerId]) {
//         professorSubjects[lecturerId] = [];
//     }

//     if (courseCode in courseData) {
//         let subjectName = courseData[courseCode]['Title'];
//         if (!professorSubjects[lecturerId].includes(subjectName)) {
//             professorSubjects[lecturerId].push(subjectName);
//         }
//     }
// }

// console.log(professorSubjects);

// // Check if a professor is teaching more than 2 subjects in a same room and same term

const roomData=JSON.parse(fs.readFileSync("Cleaned roomData.json"));
// const professorSubjectsAndRoom={};

// for (let i=0;i<roomData.length;i++){
//     let lecturerId = roomData[i].professorId;
//     let courseCode = roomData[i].courseCode;
//     let roomNo = roomData[i].roomNumber;
//     let term = roomData[i].termName;

//     if (!professorSubjectsAndRoom[lecturerId]) {
//         professorSubjectsAndRoom[lecturerId] = {};
//     }

//     let key = `${roomNo}-${term}`;
//     if (!professorSubjectsAndRoom[lecturerId][key]) {
//         professorSubjectsAndRoom[lecturerId][key] = new Set();
//     }

//     professorSubjectsAndRoom[lecturerId][key].add(courseCode);

//     if (professorSubjectsAndRoom[lecturerId][key].size > 1) {
//         console.log(
//             `Lecturer ${lecturerId} is teaching multiple courses (${[...professorSubjectsAndRoom[lecturerId][key]].join(", ")}) in the same room (${roomNo}) during the same term (${term}).`
//         );
//     }
// }


// // Check if the course is marked as required in every student's request
// for (let i = 0; i < studentData.length; i++) {
//     let studentCourse = studentData[i].courseCode;
//     let isRequired = studentData[i].requestType;
//     // console.log(studentCourse);

    
//     if (courseData[studentCourse]['Priority'] != "" && courseData[studentCourse]['Priority'] === "Core course" && isRequired !== 1) {
//         console.log(
//             `Student ${studentData[i].studentId} has not marked the core course ${studentCourse} as requestType 1.`
//         );
//     }
// }

// // Check if any student has requested StudyHall with courseCode = null
for (let i = 0; i < studentData.length; i++) {
    if (studentData[i].courseCode === "") {
        console.log(
            `Student ${studentData[i].studentId} has requested StudyHall with a null courseCode.`
        );
    }
}





