import { Typewriter } from "react-simple-typewriter";
import { Bot } from "lucide-react";

export const RefundMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-end">
      <div className="dark:text-gray-300 rounded-md p-4 max-w-[380px] transition ease-in-out duration-300 dark:bg-transparent dark:bg-gradient-to-br dark:from-black dark:via-gray-900 border dark:border-gray-600  dark:via-[90%] to-purple-750  bg-gradient-to-br from-blue-200 via-[60%] via-slate-300  to-blue-500/30 shadow-xl">
        <Typewriter
          words={[message]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={20}
          deleteSpeed={50}
          delaySpeed={6000}
        />
      </div>
      <Bot className="dark:text-blue-400 text-blue-600" size={35}/>
    </div>
  );
};
