import StudentService from "./StudentService";
const initializeAuth = () => {
  const existingUsers = localStorage.getItem("users");
  if (!existingUsers) {
    const defaultUsers = [
      {
        email: "admin@gmail.com",
        password: "admin@123",
        role: "admin",
      },
    ];
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
};

const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    if (existingUser.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      return { success: true, user: existingUser };
    } else {
      return { success: false, message: "Invalid Password" };
    }
  } else {
    const newUser = { email, password, role: "user" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    return { success: true, user: newUser };
  }
};

const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

const AuthService = {
  initializeAuth,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default AuthService;
