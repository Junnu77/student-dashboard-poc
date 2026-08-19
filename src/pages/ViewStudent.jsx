import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentService from "../services/StudentService";

const ViewStudent = () => {
  const { id } = useParams();
  //   console.log("Viewing student with ID:", id);
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedStudent = StudentService.getStudentById(Number(id));

    if (selectedStudent) {
      setStudent(selectedStudent);
    } else {
      alert("Student not found.");

      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>View Student</h2>

        <Link to="/" className="btn btn-secondary">
          ← Back
        </Link>
      </div>
      <div className="card shadow">
        <div className="card-body">
          {student ? (
            <div>
              <p>
                <strong>ID:</strong> {student.id}
              </p>
              <p>
                <strong>Name:</strong> {student.name}
              </p>
              <p>
                <strong>Email:</strong> {student.email}
              </p>
              <p>
                <strong>Course:</strong> {student.course}
              </p>
              <p>
                <strong>City:</strong> {student.city}
              </p>
              <p>
                <strong>Phone:</strong> {student.phone}
              </p>
            </div>
          ) : (
            <p>Student not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
