import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const TypewriterAnimation = ({ message }) => {
  return (
    <Typewriter
      words={[message]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={25}
      deleteSpeed={20}
      delaySpeed={2000}
    />
  );
};
