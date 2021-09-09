import { useState } from "react";
import {
  AiOutlineTwitter,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";

const SignUpPage = ({ page, setPage, darkMode }) => {
  const [signUpInput, setSignUpInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [activeBtn, setActiveBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  //handle input change
  const handleChange = (e) => {
    setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
    if (
      signUpInput.username === "" ||
      signUpInput.email === "" ||
      signUpInput.password === ""
    ) {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
  };

  //form-submit

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage("homepage");
  };
  return (
    <section className={`login-page ${darkMode && "dark-mode-login-signup"}`}>
      <div className="side-bar">
        <AiOutlineTwitter className="logo" />
        <div className="overlay"></div>
      </div>
      <div className="container">
        <h1>Sign up now</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-container">
            <input
              className="input"
              name="username"
              type="text"
              placeholder="UserName"
              autoComplete="off"
              onChange={handleChange}
              value={signUpInput.username}
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={signUpInput.email}
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              value={signUpInput.password}
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
            Sign up
          </button>
          <p>
            By signing up you agree to the{" "}
            <button className="redirect-btn">Terms of service</button>
          </p>
        </form>
        <div className="redirect-link">
          <p>
            Already have an account?{" "}
            <button className="redirect-btn" onClick={() => setPage("login")}>
              Login
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
