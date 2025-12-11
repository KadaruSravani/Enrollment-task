import React, { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const enrollCourse = (id) => {
    fetch(`http://localhost:5000/courses/${id}/enroll`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        setCourses((prev) =>
          prev.map((course) =>
            course.id === id ? { ...course, enrolled: true } : course
          )
        );
      });
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Available Courses</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              width: "250px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            className="course-card"
          >
            <h3 style={{ color: "#333" }}>{course.name}</h3>
            {course.enrolled ? (
              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "not-allowed",
                }}
                disabled
              >
                Enrolled
              </button>
            ) : (
              <button
                onClick={() => enrollCourse(course.id)}
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#007bff")
                }
              >
                Enroll
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
