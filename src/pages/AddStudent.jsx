import React from "react";
import { Link, useNavigate } from "react-router-dom";

import StudentForm from "../components/StudentForm";
import StudentService from "../services/StudentService";

function AddStudent() {

    const navigate = useNavigate();

    const saveStudent = (student) => {

        StudentService.addStudent(student);

        alert("Student Added Successfully.");

        navigate("/");

    };

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Add New Student</h2>

                <Link
                    to="/"
                    className="btn btn-secondary"
                >
                    ← Back
                </Link>

            </div>

            <StudentForm
                onSubmit={saveStudent}
            />

        </div>

    );

}

export default AddStudent;