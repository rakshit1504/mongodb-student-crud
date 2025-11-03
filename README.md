# MongoDB Student Management System (CRUD Project)

This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using MongoDB and Node.js.  
It manages a collection of student records containing roll numbers, names, departments, and marks.

## Project Overview
- **Database:** MongoDB (`collegeDB`)
- **Collection:** `students`
- **Language:** JavaScript (Node.js)
- **Purpose:** Demonstrate NoSQL CRUD operations for academic use

## Features
1. **Create:** Insert new student documents into MongoDB  
2. **Read:** Retrieve all student records  
3. **Update:** Modify existing student details  
4. **Delete:** Remove specific student entries

## Folder Structure
mongodb-student-crud/  
├── app.js  
├── package.json  
└── README.md  


## Prerequisites
Before running the project, ensure that:
- MongoDB is installed and running locally on your system (`mongodb://127.0.0.1:27017`)
- Node.js and npm are installed

## Installation
1. Clone this repository:  
```bash
   git clone https://github.com/<your-username>/mongodb-student-crud.git
```
2. Navigate into the folder:

```bash
cd mongodb-student-crud
```

3. Install required dependencies:

```bash
npm install
```
## Running the Project
Make sure MongoDB service is running on your machine.

Run the Node.js script:

```bash
node app.js
```
You’ll see the following operations performed:

- Insertion of a new student

- Retrieval of all students

- Update of marks for a student

- Deletion of a student

All console logs will confirm successful CRUD operations.

Example Output
```sql
Connecting to MongoDB...
Connected successfully!
Inserted new student! new ObjectId('...')
All Students: [ ... ]
Updated student marks! 1
Deleted student! 1
Connection closed!
```
## Verification in MongoDB Compass
You can open MongoDB Compass, navigate to:

```nginx
collegeDB > students
```
and visually confirm the database changes made by the Node.js script.

## Author
**Rakshit Bansal**
B.Tech CSE, VIT University


After saving this file, run these commands to add and push it to GitHub:

```bash
git add README.md
git commit -m "Added README"
git push
```
