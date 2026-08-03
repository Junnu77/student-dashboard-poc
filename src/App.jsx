import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Home Page */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Add Student */}
                <Route
                    path="/add"
                    element={<AddStudent />}
                />

                {/* Edit Student */}
                <Route
                    path="/edit/:id"
                    element={<EditStudent />}
                />

                {/* 404 Page */}
                <Route
                    path="*"
                    element={
                        <div className="container mt-5 text-center">

                            <h1 className="display-4 text-danger">
                                404
                            </h1>

                            <h3>Page Not Found</h3>

                            <p>
                                The page you are looking for does not exist.
                            </p>

                        </div>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;