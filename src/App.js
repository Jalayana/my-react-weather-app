import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>My React Weather App</h1>
      <footer>
        This app was coded by Jalayana Miller. It is open-sourced on{" "}
        <a
          href="https://github.com/Jalayana/my-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://soft-concha-da7918.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
