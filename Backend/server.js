const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample in-memory data
let courses = [
  { id: 1, name: "HTML Basics", enrolled: false },
  { id: 2, name: "CSS Basics", enrolled: false },
  { id: 3, name: "React Basics", enrolled: false },
  { id: 4, name: "Node.js Beginner", enrolled: false },
];

// GET all courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// ENROLL in course
app.post("/courses/:courseId/enroll", (req, res) => {
  const id = parseInt(req.params.courseId);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  course.enrolled = true;

  return res.json({
    message: "Enrolled successfully",
    course,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
