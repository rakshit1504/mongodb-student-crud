const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected successfully!");

    const db = client.db("collegeDB");
    const students = db.collection("students");

    // CREATE
    const insertResult = await students.insertOne({ rollNo: 105, name: "Rakshit Bansal", dept: "CSE", marks: 91 });
    console.log("Inserted new student!", insertResult.insertedId);

    // READ
    const allStudents = await students.find().toArray();
    console.log("All Students:", allStudents);

    // UPDATE
    const updateResult = await students.updateOne({ rollNo: 101 }, { $set: { marks: 92 } });
    console.log("Updated student marks!", updateResult.modifiedCount);

    // DELETE
    const deleteResult = await students.deleteOne({ rollNo: 104 });
    console.log("Deleted student!", deleteResult.deletedCount);

  } catch (e) {
    console.error("❌ Error:", e);
  } finally {
    await client.close();
    console.log("Connection closed!");
  }
}

main();
