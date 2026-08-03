import React, { useEffect, useRef, useState } from "react";

function StudentForm({ onSubmit, initialData = {} }) {

    const [student, setStudent] = useState({
        name: "",
        course: "",
        email: "",
        phone: "",
        city: ""
    });

    const [errors, setErrors] = useState({});

    const nameInputRef = useRef(null);

    // Auto Focus
    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    // Load Student while Editing
    useEffect(() => {

        if (initialData && Object.keys(initialData).length > 0) {

            setStudent({
                name: initialData.name || "",
                course: initialData.course || "",
                email: initialData.email || "",
                phone: initialData.phone || "",
                city: initialData.city || ""
            });

        }

    }, [initialData]);

    // Handle Input Change
    const handleChange = (event) => {

        const { name, value } = event.target;

        setStudent((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    // Form Validation
    const validateForm = () => {

        const validationErrors = {};

        if (!student.name.trim()) {
            validationErrors.name = "Student Name is required";
        }

        if (!student.course) {
            validationErrors.course = "Please select a Course";
        }

        if (!student.city) {
            validationErrors.city = "Please select a City";
        }

        if (!student.email.trim()) {

            validationErrors.email = "Email is required";

        } else {

            const emailPattern =
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

            if (!emailPattern.test(student.email)) {
                validationErrors.email = "Invalid Email Address";
            }

        }

        if (!student.phone.trim()) {

            validationErrors.phone = "Phone Number is required";

        } else {

            const phonePattern = /^[0-9]{10}$/;

            if (!phonePattern.test(student.phone)) {
                validationErrors.phone =
                    "Phone Number must be exactly 10 digits";
            }

        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;

    };

    // Submit
    const handleSubmit = (event) => {

        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        onSubmit(student);

    };

    // Reset Form
    const handleReset = () => {

        setStudent({
            name: "",
            course: "",
            email: "",
            phone: "",
            city: ""
        });

        setErrors({});

        nameInputRef.current.focus();

    };

    return (

        <div className="card shadow">

            <div className="card-header bg-primary text-white">

                <h4 className="mb-0">
                    {initialData.id ? "Edit Student" : "Add Student"}
                </h4>

            </div>

            <div className="card-body">

                <form onSubmit={handleSubmit}>

                    {/* Student Name */}

                    <div className="mb-3">

                        <label className="form-label">
                            Student Name
                        </label>

                        <input
                            ref={nameInputRef}
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            name="name"
                            value={student.name}
                            onChange={handleChange}
                            placeholder="Enter Student Name"
                        />

                        <div className="invalid-feedback">
                            {errors.name}
                        </div>

                    </div>

                    {/* Course */}

                    <div className="mb-3">

                        <label className="form-label">
                            Course
                        </label>

                        <select
                            className={`form-select ${errors.course ? "is-invalid" : ""}`}
                            name="course"
                            value={student.course}
                            onChange={handleChange}
                        >
                            <option value="">Select Course</option>
                            <option value="React JS">React JS</option>
                            <option value="Java Full Stack">Java Full Stack</option>
                            <option value="MERN Stack">MERN Stack</option>
                            <option value="Python">Python</option>
                            <option value="Angular">Angular</option>
                        </select>

                        <div className="invalid-feedback">
                            {errors.course}
                        </div>

                    </div>

                    {/* City */}

                    <div className="mb-3">

                        <label className="form-label">
                            City
                        </label>

                        <select
                            className={`form-select ${errors.city ? "is-invalid" : ""}`}
                            name="city"
                            value={student.city}
                            onChange={handleChange}
                        >
                            <option value="">Select City</option>
                            <option>Indore</option>
                            <option>Bhopal</option>
                            <option>Pune</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Nagpur</option>
                            <option>Jaipur</option>
                            <option>Surat</option>
                            <option>Ahmedabad</option>
                            <option>Hyderabad</option>
                            <option>Lucknow</option>
                            <option>Chennai</option>
                            <option>Noida</option>
                            <option>Bengaluru</option>
                            <option>Nashik</option>
                        </select>

                        <div className="invalid-feedback">
                            {errors.city}
                        </div>

                    </div>

                    {/* Email */}

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            name="email"
                            value={student.email}
                            onChange={handleChange}
                            placeholder="Enter Email Address"
                        />

                        <div className="invalid-feedback">
                            {errors.email}
                        </div>

                    </div>

                    {/* Phone */}

                    <div className="mb-3">

                        <label className="form-label">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            name="phone"
                            value={student.phone}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                            maxLength={10}
                        />

                        <div className="invalid-feedback">
                            {errors.phone}
                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="d-flex gap-2">

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            {initialData.id
                                ? "Update Student"
                                : "Save Student"}
                        </button>

                        {!initialData.id && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                        )}

                    </div>

                </form>

            </div>

        </div>

    );

}

export default StudentForm;