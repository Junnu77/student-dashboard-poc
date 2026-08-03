import { Link, NavLink } from "react-router-dom";

function Navbar({ totalStudents }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand fw-bold" to="/">
                    🎓 Student Dashboard
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item me-2">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active fw-bold"
                                        : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item me-3">
                            <NavLink
                                to="/add"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active fw-bold"
                                        : "nav-link"
                                }
                            >
                                Add Student
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <span className="badge bg-warning text-dark fs-6">
                                Total Students : {totalStudents}
                            </span>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;