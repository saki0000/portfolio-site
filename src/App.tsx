import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import { useElementSize } from "@mantine/hooks";

const App = () => {
  return (
    <div className="h-full">
      <Title />
      <About />
      <Skill />
      <Work />
    </div>
  );
};

export default App;
