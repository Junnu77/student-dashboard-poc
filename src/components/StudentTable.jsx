import React from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentTable({ students, deleteStudent }) {

    const navigate = useNavigate();

    // Delete Student
    const handleDelete = (student) => {

        const confirmDelete = window.confirm(
            `Are you sure you want to delete "${student.name}"?`
        );

        if (confirmDelete) {
            deleteStudent(student.id);
        }

    };

    return (

        <div className="card shadow">

            <div className="card-header bg-primary text-white">

                <h4 className="mb-0">
                    Student List
                </h4>

            </div>

            <div className="card-body">

                {
                    students.length === 0 ? (

                        <div className="alert alert-warning text-center">
                            No Students Found.
                        </div>

                    ) : (

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover table-striped align-middle">

                                <thead className="table-dark">

                                    <tr>

                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Course</th>
                                        <th>City</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th className="text-center">
                                            Actions
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        students.map((student, index) => (

                                            <tr key={student.id}>

                                                <td>{index + 1}</td>

                                                <td>{student.id}</td>

                                                <td>{student.name}</td>

                                                <td>{student.course}</td>

                                                <td>{student.city}</td>

                                                <td>{student.email}</td>

                                                <td>{student.phone}</td>

                                                <td className="text-center">

                                                    <Link
                                                        to={`/edit/${student.id}`}
                                                        className="btn btn-warning btn-sm me-2"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        className="btn btn-danger btn-sm me-2"
                                                        onClick={() => handleDelete(student)}
                                                    >
                                                        Delete
                                                    </button>

                                                    <button
                                                        className="btn btn-info btn-sm text-white"
                                                        onClick={() =>
                                                            navigate(`/edit/${student.id}`)
                                                        }
                                                    >
                                                        View
                                                    </button>

                                                </td>

                                            </tr>

                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>

                    )
                }

            </div>

            <div className="card-footer">

                <strong>
                    Total Students : {students.length}
                </strong>

            </div>

        </div>

    );

}

export default StudentTable;