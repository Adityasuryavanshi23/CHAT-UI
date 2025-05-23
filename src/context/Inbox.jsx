import { createContext, useContext, useState } from "react";

const InboxContext = createContext();

export const InboxProvider = ({ children }) => {
  const inbox = [
    {
      name: "Lius - GitHub",
      time: "10:00 AM",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptaolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      logo: "L",
      logoColor: "bg-blue-500",
      userMessages: [],
    },
    {
      name: "Edwards - New York",
      time: "45m",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatuuisquam, voluptatum.",
      logo: "E",
      logoColor: "bg-green-500",
      userMessages: [],
    },
    {
      name: "Lead from New York",
      time: "02:36 AM",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      logo: "L",
      logoColor: "bg-gray-500",
      userMessages: [],
    },
    {
      name: "Booking Api Problems - AirBnb",
      time: "11:00 AM",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem i.",
      logo: "AB",
      logoColor: "bg-blue-500",
      userMessages: [],
    },
    {
      name: "Miracle - Exemtary Bank",
      time: "09:00 AM",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      logo: "M",
      logoColor: "bg-gray-800",
      userMessages: [],
    },
  ];
  const [sendMessage, setSendMessage] = useState(null);
  const [inboxUserMessages, setInboxUserMessages] = useState(inbox);

  const value = {
    inbox,
    sendMessage,
    setSendMessage,
    inboxUserMessages,
    setInboxUserMessages,
  };

  return (
    <InboxContext.Provider value={value}>{children}</InboxContext.Provider>
  );
};

export const useInbox = () => {
  return useContext(InboxContext);
};
