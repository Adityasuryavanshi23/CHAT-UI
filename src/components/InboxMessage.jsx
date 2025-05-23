import { useInbox } from "../context/Inbox";

export const InboxMessage = ({ setOpenSidebar }) => {
  const { inbox, setSendMessage, sendMessage } = useInbox();

  const handleClick = (item) => {
    setSendMessage(item);
    setOpenSidebar(false);
  };

  return (
    <div className=" px-2 py-2 mt-2">
      {inbox.map((item, i) => {
        const { name, time, message, logo, logoColor } = item;
        return (
          <div
            onClick={() => handleClick(item)}
            className={`flex cursor-pointer mt-1 items-center gap-3 shadow-md border dark:border-none dark:border-b-gray-900 py-4 px-1 relative ${
              sendMessage?.name === item.name ? "dark:bg-muted " : ""
            } hover:dark:bg-muted hover:bg-gray-200 rounded-sm `}
            key={i}
          >
            <div
              className={`${logoColor} min-w-8 h-8 flex justify-center items-center rounded-full text-white `}
            >
              {logo}
            </div>
            <div className="flex flex-col gap-1">
              <p
                className={`text-[14px]   ${
                  sendMessage?.name === item.name
                    ? "dark:text-purple-400 text-blue-800 font-bold text-lg transition-all duration-200"
                    : "font-semibold text-[#2d2d2d] dark:text-purple-100"
                }  capitalize line-clamp-1`}
              >
                {name}
              </p>
              <p className="line-clamp-1 text-sm text-gray-500 font-medium dark:text-gray-400">
                {message}
              </p>
            </div>
            <span className="text-[10px] absolute  right-1  bottom-4 dark:text-gray-200  text-black font-medium dark:font-normal">
              {time}
            </span>
          </div>
        );
      })}
    </div>
  );
};
