
use university

db.createCollection("students")



db.students.insertMany([
{
  rollno: 1,
  name: "Dhruvin",
  c_marks: 70,
  python_marks: 80,
  total_marks: 150,
  percentage: 75
}
])

db.students.find()

db.students.find({ c_marks: { $lt: 40 } })

db.students.find({
  c_marks: { $lt: 40 },
  python_marks: { $lt: 40 }
})


db.students.find({ percentage: { $gt: 80 } })

db.students.find().sort({ percentage: -1 })

db.students.updateMany(
  {},
  { $inc: { c_marks: 5 } }
)

db.students.deleteOne({
  c_marks: 0,
  python_marks: 0
})

db.students.find({
  name: "Dhruvin"
})