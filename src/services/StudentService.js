const STORAGE_KEY = "students";

/**
 * Initialize localStorage from students.json
 * This should be called once when the application starts.
 */
const initializeStudents = async () => {
    const students = localStorage.getItem(STORAGE_KEY);
    if (!students) {
        const response = await fetch("/data/students.json");
        const data = await response.json();
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );
    }
};

/**
 * Get All Students
 */
const getStudents = () => {
    const students = localStorage.getItem(STORAGE_KEY);
    return students ? JSON.parse(students) : [];
};

/**
 * Save Students into localStorage
 */
const saveStudents = (students) => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(students)
    );
};

/**
 * Add Student
 */
const addStudent = (student) => {
    const students = getStudents();
    const newStudent = {
        id: Date.now(),
        ...student
    };
    students.push(newStudent);
    saveStudents(students);
};

/**
 * Update Student
 */
const updateStudent = (id, updatedStudent) => {
    const students = getStudents();
    const updatedList = students.map((student) =>
        student.id === id
            ? {
                  ...student,
                  ...updatedStudent,
                  id
              }
            : student
    );
    saveStudents(updatedList);
};

/**
 * Delete Student
 */
const deleteStudent = (id) => {
    const students = getStudents();
    const filteredStudents = students.filter(
        (student) => student.id !== id
    );
    saveStudents(filteredStudents);
};

/**
 * Get Student By ID
 */
const getStudentById = (id) => {
    const students = getStudents();
    return students.find(
        (student) => student.id === id
    );
};

/**
 * Search Student
 */
const searchStudents = (keyword) => {
    const students = getStudents();
    if (!keyword.trim()) {
        return students;
    }
    return students.filter((student) =>
        student.name
            .toLowerCase()
            .includes(keyword.toLowerCase())
        ||
        student.course
            .toLowerCase()
            .includes(keyword.toLowerCase())
    );
};

/**
 * Sort Students by Name
 */
const sortStudentsByName = () => {
    const students = getStudents();
    return [...students].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
};

/**
 * Clear All Students
 */
const clearStudents = () => {
    localStorage.removeItem(STORAGE_KEY);
};

const StudentService = {
    initializeStudents,
    getStudents,
    saveStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
    searchStudents,
    sortStudentsByName,
    clearStudents
};

export default StudentService;