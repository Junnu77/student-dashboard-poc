import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import StudentTable from "../components/StudentTable";
import StudentService from "../services/StudentService";

function Home() {

    // State Variables
    const [students, setStudents] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Load Students
    useEffect(() => {

        loadStudents();

    }, []);

    // Load Data from localStorage
    const loadStudents = async () => {

        await StudentService.initializeStudents();

        const studentList = StudentService.getStudents();

        setStudents(studentList);

    };

    // Delete Student
    const deleteStudent = (id) => {

        StudentService.deleteStudent(id);

        setStudents(StudentService.getStudents());

    };

    // Search Student
    const handleSearch = (event) => {

        const keyword = event.target.value;

        setSearchText(keyword);

        if (keyword.trim() === "") {

            setStudents(StudentService.getStudents());

        } else {

            setStudents(
                StudentService.searchStudents(keyword)
            );

        }

    };

    // Sort Student by Name
    const sortByName = () => {

        setStudents(
            StudentService.sortStudentsByName()
        );

    };

    return (

        <>

            {/* Navbar */}

            <Navbar totalStudents={students.length} />

            <div className="container mt-4">

                {/* Page Heading */}

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>Student Dashboard</h2>

                    <Link
                        to="/add"
                        className="btn btn-success"
                    >
                        + Add Student
                    </Link>

                </div>

                {/* Search & Sort */}

                <div className="row mb-4">

                    <div className="col-md-8">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Name or Course..."
                            value={searchText}
                            onChange={handleSearch}
                        />

                    </div>

                    <div className="col-md-4">

                        <button
                            className="btn btn-primary w-100"
                            onClick={sortByName}
                        >
                            Sort By Name
                        </button>

                    </div>

                </div>

                {/* Dashboard Cards */}

                <div className="row mb-4">

                    <div className="col-md-3">

                        <div className="card bg-primary text-white shadow">

                            <div className="card-body text-center">

                                <h5>Total Students</h5>

                                <h2>{students.length}</h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card bg-success text-white shadow">

                            <div className="card-body text-center">

                                <h5>React Students</h5>

                                <h2>

                                    {
                                        students.filter(
                                            student =>
                                                student.course === "React JS"
                                        ).length
                                    }

                                </h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card bg-warning text-dark shadow">

                            <div className="card-body text-center">

                                <h5>Java Students</h5>

                                <h2>

                                    {
                                        students.filter(
                                            student =>
                                                student.course === "Java Full Stack"
                                        ).length
                                    }

                                </h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card bg-danger text-white shadow">

                            <div className="card-body text-center">

                                <h5>Python Students</h5>

                                <h2>

                                    {
                                        students.filter(
                                            student =>
                                                student.course === "Python"
                                        ).length
                                    }

                                </h2>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Student Table */}

                <StudentTable
                    students={students}
                    deleteStudent={deleteStudent}
                />

            </div>

        </>

    );

}

export default Home;