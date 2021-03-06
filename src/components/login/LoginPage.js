import { useState, useEffect } from "react";
import {
  AiOutlineTwitter,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";

const LogInPage = ({ page, setPage, darkMode, users, setUsers }) => {
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });
  const [activeBtn, setActiveBtn] = useState(false);
  const [error, setError] = useState({ username: false, password: false });
  const [isVisible, setIsVisible] = useState(false);
  const [alert, setAlert] = useState(false);

  //handling input change

  const handleChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
    if (loginInput.username === "" || loginInput.password === "") {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
  };

  //form-submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginInput.username !== "" && loginInput.password !== "") {
      setError({ username: false, password: false });
      const isUserExist = users.findIndex(
        ({ username, password }) =>
          username === loginInput.username && password === loginInput.password
      );
      if (isUserExist !== -1) {
        setPage("homepage");
      } else {
        setAlert(true);
      }
    } else {
      if (loginInput.username === "" && loginInput.password === "") {
        setError({ username: true, password: true });
      } else if (loginInput.username === "") {
        setError({ username: true, password: false });
      } else if (loginInput.password === "") {
        setError({ username: false, password: true });
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    return clearTimeout;
  }, [alert]);

  return (
    <section className={`login-page ${darkMode && "dark-mode-login-signup"}`}>
      <div className="side-bar">
        <AiOutlineTwitter className="logo" />
        <div className="overlay"></div>
      </div>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <p className={`alert ${alert && "show"}`}>
            Invalid Username or Password
          </p>
          <div className="input-container">
            <input
              className={`input ${error.username && "error"}`}
              name="username"
              type="text"
              placeholder="UserName"
              onChange={handleChange}
              value={loginInput.username}
            />
          </div>
          <div className="input-container">
            <input
              className={`input ${error.password && "error"}`}
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              value={loginInput.password}
            />
            {isVisible ? (
              <AiFillEyeInvisible
                className="eye-icon"
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <AiFillEye
                className="eye-icon"
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
          </div>

          <button
            className={`submit-btn ${activeBtn && "active-submit-btn"}`}
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="redirect-link">
          <p>
            New User?{" "}
            <button className="redirect-btn" onClick={() => setPage("signup")}>
              SignUp
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
