import { useInbox } from "../context/Inbox";
import { AnimatedMessage, TypewriterAnimation } from "./index";

export const CustomerDetail = () => {
  const { sendMessage } = useInbox();

  return (
    <div>
      {sendMessage ? (
        <AnimatedMessage key={sendMessage?.name}>
          <h1 className="text-center capitalize font-semibold dark:text-purple-500 mb-4 text-2xl ">
            customer Details
          </h1>
          <div className="flex flex-col   items-center">
            <div
              className={`w-[60px] h-[60px] rounded-full font-bold flex justify-center items-center text-3xl ${sendMessage?.logoColor}`}
            >
              <p className="text-white">{sendMessage?.logo}</p>
            </div>
            <h1 className="text-[16px] font-bold text-gray-800 dark:font-semibold dark:text-purple-200 mt-1">
              {sendMessage?.name}
            </h1>
            <p className="text-sm dark:text-purple-100 font-medium ">
              {sendMessage?.email || `${sendMessage?.name}@gmail.com`}{" "}
            </p>
          </div>
        </AnimatedMessage>
      ) : (
        <div>
          <h1 className="text-md  font-medium dark:text-purple-200  ">
            <TypewriterAnimation message="Select a Chat first......😊" />
          </h1>
        </div>
      )}
    </div>
  );
};
