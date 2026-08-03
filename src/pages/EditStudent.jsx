import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import StudentForm from "../components/StudentForm";
import StudentService from "../services/StudentService";

function EditStudent() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [student, setStudent] = useState(null);

    useEffect(() => {

        const selectedStudent =
            StudentService.getStudentById(Number(id));

        if (selectedStudent) {

            setStudent(selectedStudent);

        } else {

            alert("Student not found.");

            navigate("/");

        }

    }, [id, navigate]);

    const updateStudent = (updatedStudent) => {

        StudentService.updateStudent(
            Number(id),
            updatedStudent
        );

        alert("Student Updated Successfully.");

        navigate("/");

    };

    if (!student) {

        return (

            <div className="container mt-5">

                <div className="text-center">

                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>

                    <p className="mt-3">
                        Loading Student...
                    </p>

                </div>

            </div>

        );

    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Edit Student</h2>

                <Link
                    to="/"
                    className="btn btn-secondary"
                >
                    ← Back
                </Link>

            </div>

            <StudentForm
                initialData={student}
                onSubmit={updateStudent}
            />

        </div>

    );

}

export default EditStudent;