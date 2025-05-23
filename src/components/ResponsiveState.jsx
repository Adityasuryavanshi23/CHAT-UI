import { AlignLeft, Bot } from "lucide-react";

export const ResponsiveState = ({
  openSidebar,
  setOpenSidebar,
  openCopilot,
  setOpenCopilot,
}) => {
  return (
    <>
      <AlignLeft
        onClick={() => setOpenSidebar(true)}
        className={`mt-4 ml-4 ${
          openSidebar ? "hidden" : ""
        }   sm:hidden cursor-pointer fixed  z-50 dark:text-purple-200`}
      />
      <Bot
        size={30}
        onClick={() => setOpenCopilot(true)}
        className={`mt-4 ml-4 ${
          openSidebar ? "hidden" : ""
        }   sm:hidden cursor-pointer fixed right-4  z-50 dark:text-purple-200 animate-bounce`}
      />
      {openSidebar && (
        <div
          className="fixed inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-lg z-40 sm:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}
      {openCopilot && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-lg z-40 sm:hidden"
          onClick={() => setOpenCopilot(false)}
        ></div>
      )}
    </>
  );
};
