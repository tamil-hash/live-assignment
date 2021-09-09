import { useState, useEffect } from "react";
import LoginPage from "./components/login/LoginPage";
import SignUpPage from "./components/signup/SignUpPage";
import HomePageLight from "./components/home/HomePage";

const defaultUser = [{ username: "tamil", password: "1234" }];
function App() {
  const [page, setPage] = useState("login");
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || defaultUser
  );

  useEffect(() => {
    if (page === "login") {
      document.title = "Login Page";
    } else if (page === "signup") {
      document.title = "Signup Page";
    } else if (page === "homepage") {
      document.title = "Homepage";
    }
  }, [page]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  if (page === "signup") {
    return (
      <SignUpPage
        page={page}
        setPage={setPage}
        darkMode={darkMode}
        setUsers={setUsers}
        users={users}
      />
    );
  }

  if (page === "homepage") {
    return (
      <HomePageLight
        page={page}
        setPage={setPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    );
  }

  return (
    <LoginPage
      page={page}
      setPage={setPage}
      darkMode={darkMode}
      setUsers={setUsers}
      users={users}
    />
  );
}

export default App;
