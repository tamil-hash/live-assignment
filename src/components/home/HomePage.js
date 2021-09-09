import { useEffect } from "react";
import tiltPhone from "../images/tilt-phone.png";
const HomePage = ({ page, setPage, darkMode, setDarkMode }) => {
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <section className={`homepage ${darkMode && "dark-mode"} `}>
      <header className="home-head">
        <h1>
          <span>L</span>UCY
        </h1>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
          <span className={`slider ${darkMode && "slider-bg"}`}></span>
        </label>
      </header>
      <main className="home-content">
        <div className="img-container">
          <img src={tiltPhone} alt="tilt-phone" />
        </div>
        <div className="text-content">
          <h1>
            <span>
              ONE TOUCH FOR <br />{" "}
            </span>
            ALL NEEDS
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="btn-container">
            <button type="button" onClick={() => setPage(!page)}>
              Logout
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
