import { useInbox } from "../context/Inbox";
import { InboxMessage } from "./InboxMessage";
import { Inbox, Folder, SquareMenu, X } from "lucide-react";

export const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const { inbox } = useInbox();
  console.log(inbox);
  return (
    <section
      className={`max-w-[300px]  w-full min-h-screen bg-[#faf9f6] dark:bg-transparent z-50 transition-transform duration-300 ease-in-out ${
        openSidebar ? "fixed translate-x-0" : "fixed -translate-x-full"
      } sm:static sm:translate-x-0 sm:block`}
    >
      {openSidebar && (
        <span
          onClick={() => setOpenSidebar(false)}
          className="absolute top-4 right-1 cursor-pointer"
        >
          <X size={20} />
        </span>
      )}

      <div className="flex gap-4  ml-4 mt-2 capitalize dark:text-purple-400 text-[#2d2d2d] font-bold items-center">
        <h1 className="text-[20px]">your inbox </h1>
        <span className="dark:text-purple-200 mt-1 ">
          <Inbox size={20} />
        </span>
      </div>
      <hr className=" mt-4 dark:border-gray-800" />
      <div className="flex justify-between px-6 mt-4">
        <div className="flex items-center gap-1">
          <p className="dark:text-purple-400 capitalize font-bold text-sm">
            <strong className="text-foreground text-[16px] font-bold">
              {inbox.length}
            </strong>{" "}
            open
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="dark:text-purple-400 capitalize font-medium text-sm">
            waiting longest
          </p>
        </div>
      </div>
      <div>
        <InboxMessage setOpenSidebar={setOpenSidebar} />
      </div>
      <div className="absolute bottom-4 left-4 flex  gap-1 ">
        <SquareMenu
          className="dark:bg-gray-500/50 p-1 rounded-sm dark:hover:bg-gray-800 hover:bg-gray-700/20 cursor-pointer"
          size={30}
        />
        <Folder
          className="dark:bg-gray-500/50 p-1 rounded-sm  hover:bg-gray-700/20 cursor-pointer"
          size={30}
        />
      </div>
    </section>
  );
};
