import { useState } from "react";
import { ResponsiveState, Sidebar, MessageBox, RightPanel } from "./components";
import "./App.css";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openCopilot, setOpenCopilot] = useState(false);
  return (
    <>
      <ResponsiveState
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        openCopilot={openCopilot}
        setOpenCopilot={setOpenCopilot}
      />
      <div className="min-h-screen flex dark-gradient">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div className="flex-[2] bg-gray-800/10 h-screen">
          <MessageBox />
        </div>
        <div
          className={`flex-1 ${openCopilot ? "max-sm:block" : "max-sm:hidden"}`}
        >
          <RightPanel
            setOpenCopilot={setOpenCopilot}
            openCopilot={openCopilot}
          />
        </div>
      </div>
    </>
  );
}

export default App;
