# 📊 Crestwood College Scheduling Validation and Insights

## 📌 Project Overview

This project involves cleaning and validating raw scheduling data from Crestwood College. The goal is to identify anomalies, validate consistency across multiple datasets, and generate insights based on the provided rules.

The data is extracted and organized from multiple sheets into JSON format for easier processing and validation. The validation checks ensure the accuracy of student course requests, lecturer assignments, room allocations, and adherence to scheduling rules.

## 📁 Data Sources

The dataset includes the following cleaned JSON files derived from the provided Excel sheet:

1. **course_list.json** – Information on all courses offered
2. **Cleaned studentRequests.json** – Students' course preferences
3. **Cleaned lecturerDetails.json** – Lecturer assignments to courses
4. **Cleaned roomData.json** – Room allocations for courses and lecturers

## 🔍 Validations Performed

### ✅ 1. Validating Student Course Selections
- **Check:** Ensure all courses chosen by students exist in the course list.
- **Anomaly:**
  - Some students have chosen invalid courses (e.g., "Study", "Intern1"), which do not exist in the official course list.
  - Some students have not selected any course (empty `courseCode` field).
  ![Code in insights.js](./images/Screenshot%202025-03-23%20014720.png)

### ✅ 2. Checking Section Assignments for Courses
- **Check:** Validate that every course has at least one section assigned.
- **Anomaly:**
  - Some courses have zero sections assigned, which violates scheduling rules.
  ![Code in insights.js](./images/Screenshot%202025-03-23%20014815.png)

### ✅ 3. Ensuring Courses Have Credit Values
- **Check:** Verify that every course has a valid credit value (either for a half-term or full-year).
- **Anomaly:**
  - Some courses are missing credit values, which is inconsistent with the rules.
  ![Code in insights.js](./images/Screenshot%202025-03-23%20015013.png)

### ✅ 4. Mapping Subjects to Professors
- **Check:** Identify which subjects each professor is assigned to teach.
- **Insight:**
  - Professors are handling multiple subjects, which is allowed but requires careful scheduling to avoid overlaps.
  ![Code in insights.js](./images/Screenshot%202025-03-23%20015106.png)

### ✅ 5. Detecting Lecturer Conflicts in Rooms and Terms
- **Check:** Ensure no lecturer is double-booked in the same room during the same term.
- **Anomaly:**
  - Certain lecturers are assigned to teach multiple subjects in the same room during the same term, causing scheduling conflicts.
  ![Code in insights.js](./images/Screenshot%202025-03-23%20015250.png)

### ✅ 6. Validating Core Course Prioritization
- **Check:** Ensure students mark core courses with priority (requestType = 1).
- **Anomaly:**
  - Some students did not mark core courses as required, violating scheduling policies.
  ![Code in insights.js](./images/Screenshot%202025-03-23%20015509.png)

### ✅ 7. Handling Null Course Requests
- **Check:** Detect students who requested courses without valid `courseCode`.
- **Anomaly:**
  - Some students have requested a "StudyHall" with a null `courseCode`.
  ![Code in insights.js](./images/Screenshot%202025-03-23%20015621.png)

### ✅ 8. Unassigned Priority and Code
- **Check:** Ensure that all requested courses have a valid priority and course code.
- **Anomaly:**
  - Some students have requested courses where both priority and course code are missing.
  ![Code in insights.js](./images/Screenshot%202025-03-23%20015621.png)

## 📊 Key Insights and Anomalies

1. **Invalid Course Requests**
   - Some students have requested non-existent courses like "Study" and "Intern1".
   - Empty `courseCode` fields indicate unfulfilled course requests.

2. **Unassigned Sections and Credits**
   - Certain courses lack section assignments, meaning they cannot be scheduled.
   - Some courses have zero credits despite the rule stating that each course must be half-term or full-year.

3. **Lecturer Conflicts**
   - Some lecturers are double-booked in the same room and term.

4. **Student Request Errors**
   - Core courses are not marked as required by several students.
   - StudyHall requests with null `courseCode` indicate incomplete preferences.

## 🧰 How to Run the Validations

1. Ensure Node.js is installed on your system.
2. Place all JSON files in the project directory.
3. Run the following command to execute validations:

```bash
node insights.js
```


