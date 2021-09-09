import { useState } from "react";
import LoginPage from "./components/login/LoginPage";
import SignUpPage from "./components/signup/SignUpPage";
import HomePageLight from "./components/home/HomePage";

const getLocalStorage = () => {
  const value = localStorage.getItem("darkMode");
  if (value === null) {
    return false;
  } else {
    return JSON.parse(value);
  }
};
function App() {
  const [page, setPage] = useState("login");
  const [darkMode, setDarkMode] = useState(getLocalStorage);

  if (page === "signup") {
    return <SignUpPage page={page} setPage={setPage} darkMode={darkMode} />;
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

  return <LoginPage page={page} setPage={setPage} darkMode={darkMode} />;
}

export default App;
