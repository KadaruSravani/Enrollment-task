import React, { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load courses on start
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to load courses from server");
        setLoading(false);
      });
  }, []);

  // Enroll API
  const enrollCourse = (id) => {
    fetch(`http://localhost:5000/courses/${id}/enroll`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message); // popup message

        setCourses((prev) =>
          prev.map((course) =>
            course.id === id ? { ...course, enrolled: true } : course
          )
        );
      })
      .catch(() => alert("Error enrolling in course"));
  };

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading Courses...
      </h2>
    );
  }

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#f3e5f5",

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
          marginTop: "40px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              backgroundColor: "#e8f5e9",

              borderRadius: "10px",
              padding: "25px",
              width: "260px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#444" }}>{course.name}</h3>

            {course.enrolled ? (
              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
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
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
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
