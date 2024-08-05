import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { UserForm } from "./components/UserForm";
import Results from "./components/Results";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [gradient, setGradient] = useState({
    color1: getRandomColor(),
    color2: getRandomColor(),
  });

  const [userInput, setUserinput] = useState({
    initialInvestment: 500,
    annualInvestment: 200,
    expectedReturn: 7.75,
    duration: 5,
  });

  let isInputValid = true;
  let msg = "";
  for (const [key, value] of Object.entries(userInput)) {
    if (value <= 0) {
      isInputValid = false;
      msg = "Entries should be greater than zero!";
      break;
    }
  }

  const handleChange = (inputName, inputValue) => {
    setGradient({
      color1: getRandomColor(),
      color2: getRandomColor(),
    });

    setUserinput((prev) => {
      return {
        ...prev,
        [inputName]: +inputValue,
      };
    });
  };

  const gradientStyle = {
    background: `linear-gradient(to right, ${gradient.color1}, ${gradient.color2})`,
    // height: "100vh",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
  };

  return (
    <>
      <Header />
      <UserForm input={userInput} onChange={handleChange} />
      {!isInputValid && msg}
      {isInputValid && (
        <Results input={userInput} gradientStyle={gradientStyle} />
      )}
    </>
  );
}

export default App;
