import React, { useEffect, useState } from "react";
import {
  MoonStar,
  Ellipsis,
  CircleX,
  MessageSquareMore,
  Laugh,
  Zap,
  Book,
  Send,
  LockKeyhole,
  Sun,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { AnimatedMessage } from "./index";
import { useInbox } from "../context/Inbox";

export const MessageBox = () => {
  const [dark, setdark] = useState(
    JSON.parse(localStorage.getItem("dark") || false)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);
  const {
    sendMessage,
    setSendMessage,
    inboxUserMessages,
    setInboxUserMessages,
  } = useInbox();

  const [send, setSend] = useState("");
  const [message, setMessage] = useState([]);
  console.log(inboxUserMessages);
  const currentChat = inboxUserMessages.find(
    (chat) => chat.name === sendMessage?.name
  );

  const handlesend = () => {
    if (send.trim() === "") {
      return;
    }
    const updateInbox = inboxUserMessages.map((chat) => {
      if (chat?.name === sendMessage.name) {
        return {
          ...chat,
          userMessages: [...(chat.userMessages || []), send],
        };
      }
      return chat;
    });

    setInboxUserMessages(updateInbox);
    const updatedChat = updateInbox.find(
      (chat) => chat.name === sendMessage.name
    );
    setSendMessage(updatedChat);
    setMessage([...message, send]);
    setSendMessage((prev) => {
      return {
        ...prev,
        usertext: send,
      };
    });
    setSend("");
  };

  return (
    <div className="flex flex-col h-full bg-[#f3f2f0] dark:bg-transparent">
      {/* header */}
      <div className="flex justify-between px-8 mt-3 max-sm:justify-end max-sm:px-14 ">
        <h1 className="dark:text-purple-400 max-sm:hidden text-xl font-bold">
          {sendMessage?.name}
        </h1>
        <div className="flex justify-between items-center gap-2">
          <Ellipsis className="dark:bg-purple-500/50 rounded-sm p-2 w-8 h-8 bg-gray-400/20 hover:bg-gray-400 dark:hover:bg-purple-700/40 cursor-pointer" />
          {dark ? (
            <Sun
              onClick={() => setdark(!dark)}
              className="dark:bg-purple-500/50 rounded-sm p-2 w-8 h-8 bg-gray-400/20 hover:bg-gray-400 dark:hover:bg-purple-700/40 cursor-pointer"
            />
          ) : (
            <MoonStar
              onClick={() => setdark(!dark)}
              className="dark:bg-purple-500/50 rounded-sm p-2 w-8 h-8 bg-gray-400/20 hover:bg-gray-400 dark:hover:bg-purple-700/40 cursor-pointer"
            />
          )}
          <button
            onClick={() => setSendMessage(null)}
            className="flex items-center gap-1 capitalize dark:hover:bg-purple-700/40 cursor-pointer dark:bg-purple-700/70 px-4 py-2 font-medium  rounded-md text-sm bg-gray-800 hover:bg-gray-500 text-white"
          >
            <CircleX size={16} />
            close
          </button>
        </div>
      </div>

      {/* message dislay */}

      <div className="flex-1 overflow-y-auto scrollbar-hide px-1 space-y-3 scroll-smooth">
        {sendMessage ? (
          <>
            <AnimatedMessage key={sendMessage?.name}>
              <div className="flex  justify-center gap-2 mt-3 max-sm:mt-8">
                <LockKeyhole size={18} className="dark:text-purple-400 mt-1" />
                <h1 className="text-center mb-4 font-bold dark:text-purple-400 text-[16px]  ">
                  {sendMessage.name}
                </h1>
                <LockKeyhole size={18} className="dark:text-purple-400 mt-1" />
              </div>
              <div className="flex justify-start px-6 mb-6 ">
                <div className="flex gap-2 max-w-[85%]    items-end ">
                  <div
                    className={`${sendMessage.logoColor} font-bold text-white rounded-full min-w-8 h-8 flex items-center justify-center`}
                  >
                    {sendMessage.logo}
                  </div>
                  <p className="dark:bg-purple-200/20  max-sm:text-[12px] dark:text-white/80 p-3  rounded-lg relative shadow-lg border dark:border-none border-gray-300">
                    {sendMessage.message}
                    <span className="absolute right-2  max-sm:text-[12px] bottom-[6px] text-sm font-medium dark:text-gray-200">
                      {sendMessage.time}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 justify-end items-end px-6 mb-2">
                <div className="dark:bg-purple-800/80 dark:text-primary-foreground bg-blue-700 text-white p-3 font-medium rounded-lg max-w-[75%]  max-sm:text-[12px] ">
                  Sure, I’m happy to help!
                </div>
                <div className="bg-green-500 text-white font-bold rounded-full min-w-8 h-8 flex items-center justify-center">
                  U
                </div>
              </div>
              {currentChat?.userMessages?.map((msg, i) => (
                <AnimatedMessage key={i}>
                  <div className="flex gap-2 justify-end items-end px-6 mb-2 ">
                    <div className="dark:bg-purple-800/80 dark:text-primary-foreground bg-blue-700 text-white p-3 font-medium rounded-lg max-w-[75%] ">
                      {msg}
                    </div>
                    <div className="bg-green-500  text-white rounded-full min-w-8 h-8 flex items-center justify-center">
                      U
                    </div>
                  </div>
                </AnimatedMessage>
              ))}
            </AnimatedMessage>
          </>
        ) : (
          <div className="flex justify-center  items-center   h-full ">
            <p className="dark:text-purple-400 text-gray-800 font-bold dark:font-bold text-center text-[16px] max-w-xl w-full leading-relaxed capitalize max-sm:px-6">
              <Typewriter
                words={[
                  "Hello and welcome to chat 🙂",
                  "Please select a conversation from the left panel to display it here...😊",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={25}
                deleteSpeed={20}
                delaySpeed={2000}
              />
            </p>
          </div>
        )}
      </div>

      {/* message input */}
      <div className="h-[170px] px-3 shrink-0  ">
        <div className="dark:bg-purple-800/20 bg-gray-400/30 rounded-xl flex flex-col py-2">
          <div className=" rounded-md py-2 px-4  ">
            <button className="dark:bg-gray-400/10 bg-gray-800 hover:bg-gray-600 text-white rounded-md py-1 ">
              <div className="flex   items-center gap-1 px-3">
                <MessageSquareMore size={20} className="mt-1" />{" "}
                <strong className="text-[14px]  capitalize">chat</strong>
              </div>
            </button>
          </div>
          <div>
            <textarea
              value={send}
              onChange={(e) => setSend(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handlesend();
                }
              }}
              type="text"
              className="w-full  px-6 resize-none overflow-y-auto placeholder:text-black dark:placeholder:text-white bg-transparent focus:outline-none text-sm"
              placeholder="Type your message here ..... "
            />
          </div>
          <div className="flex justify-between items-center mt-4  ">
            <div className="flex px-6 gap-1 ">
              <Zap
                size={25}
                className="dark:bg-gray-500/50 dark:hover:bg-gray-700/20 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md   p-1"
              />
              <Book
                size={25}
                className="dark:bg-gray-500/50  dark:hover:bg-gray-700/20 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md   p-1"
              />
              <Laugh
                size={25}
                className="dark:bg-gray-500/50  dark:hover:bg-gray-700/20 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md   p-1"
              />
            </div>
            <div className="mr-4">
              <button
                onClick={handlesend}
                className={`flex items-center capitalize rounded-md ${
                  send.length === 0 ? "opacity-40 cursor-not-allowed " : ""
                } dark:bg-purple-700/70 dark:hover:bg-purple-700/50 bg-gray-800 text-white hover:bg-gray-700 px-3 py-1  gap-1`}
              >
                <strong>send</strong> <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
