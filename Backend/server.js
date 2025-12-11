const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let courses = [
  { id: 1, name: "html basics", enrolled: false },
  { id: 2, name: "css basics", enrolled: false },
  { id: 3, name: "React basics", enrolled: false },
  { id: 4, name: "Node.js Beginner", enrolled: false },
];

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/courses/:courseId/enroll", (req, res) => {
  const id = parseInt(req.params.courseId);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  course.enrolled = true;

  res.json({ message: "Enrolled successfully", course });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
