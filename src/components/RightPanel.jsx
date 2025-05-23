import { useState } from "react";
import { RefundMessage, CustomerDetail, TypewriterAnimation } from "./index";
import { Bot, ArrowUp, BotMessageSquare, X } from "lucide-react";

export const RightPanel = ({ openCopilot, setOpenCopilot }) => {
  const [response, setResponse] = useState("");
  const [currentIndex, setcurrentIndex] = useState(0);
  const [detail, setDetail] = useState(false);

  const suggestions = [
    {
      suggestion: "How Do I Get A Refund ?",
      message:
        "Sure! I can help you with that. If you're looking to get a refund, the first step is to check your billing section. Navigate to your account settings and look under the “Billing & Subscription” tab. You’ll find all your past transactions and invoice details there. This section allows you to review charges and eligibility for refund options.",
    },
    {
      suggestion: "can I change my email?",
      message:
        "Yes, you can absolutely change your email address from the Account Settings page. Once you're there, click on the  section and locate the email field. Enter your new email address and hit Save. You'll receive a verification link on the new address — make sure to confirm it to avoid account access issues. If you don't receive the email, check your spam folder or contact support for manual verification.",
    },
    {
      suggestion: "how do I cancel my subscription?",
      message:
        "To cancel your subscription, go to Settings → Billing → Cancel Plan. You will retain access until the end of the billing cycle.",
    },
    {
      suggestion: "what payment methods are accepted?",
      message:
        "We currently accept credit/debit cards, PayPal, and Stripe. You can manage your payment methods in the Billing section.",
    },
  ];
  const handleClick = () => {
    setResponse(true);
    setTimeout(() => {
      setcurrentIndex((prev) => (prev + 1) % suggestions.length);
      setResponse(false);
    }, 12000);
  };

  return (
    <div
      className={`flex flex-col h-full  dark-gradient  bg-gradient-to-br  z-50 transition-transform duration-300 ease-in-out from-blue-100/50 via-gray-200 via-[60%] to-pink-300/60    ${
        openCopilot ? "translate-x-0" : "-translate-x-full"
      }   fixed right-0 top-0 w-[80%] sm:static sm:translate-x-0 sm:w-full`}
    >
      {openCopilot && (
        <span className="absolute right-7 top-5 cursor-pointer">
          <X
            className="dark:text-purple-200"
            onClick={() => setOpenCopilot(false)}
          />
        </span>
      )}
      <div className="flex gap-8 items-center mt-4 px-4  ">
        <button
          onClick={() => setDetail(false)}
          className="flex items-center gap-1 hover:scale-110 transition ease-in-out text-blue-500  cursor-pointer"
        >
          <Bot size={30} />
          <p className="dark:text-transparent capitalize text-[18px] font-medium dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-300 max-sm:text-[16px]  dark:to-purple-400  text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 max-sm:bg-gradient-to-r max-sm:from-purple-800 max-sm:via-pink-500 max-sm:to-blue-800 ">
            AI copilot
          </p>
        </button>
        <button
          onClick={() => setDetail(true)}
          disabled={response}
          className={`${
            response
              ? " dark:opacity-45 opacity-10 cursor-not-allowed"
              : "cursor-pointer"
          }  dark:text-purple-400 cursor-pointer hover:scale-110 transition ease-in-out  dark:hover:text-purple-600  font-medium capitalize text-[18px] max-sm:text-[16px] `}
        >
          details
        </button>
      </div>
      <div className=" border dark:border-gray-800  mt-4"></div>
      <div className="  flex-1 flex flex-col justify-center items-center capitalize mt-6 px-3">
        {response ? (
          <RefundMessage message={suggestions[currentIndex].message} />
        ) : (
          <div>
            {detail ? (
              <CustomerDetail />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <h1 className="flex justify-center ">
                  <BotMessageSquare
                    size={40}
                    className="dark:text-blue-400 text-blue-700"
                  />
                </h1>
                <p className="ml-2 text-center text-xl max-sm:text-[18px] font-bold text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-blue-300  dark:to-purple-400 bg-gradient-to-r from-purple-700  via-pink-500 to-blue-700">
                  hi i am ai copilot
                </p>

                <p className="dark:text-gray-400 text-gray-700 font-medium text-sm max-sm:text-[12px] capitalize">
                  <TypewriterAnimation message="ask me anything about this conversation..." />{" "}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="h-[20%] flex flex-col justify-end ">
        {currentIndex < suggestions.length && !response && (
          <div
            onClick={handleClick}
            className="mb-3 px-4  cursor-pointer transition-all hover:scale-95 duration-150 ease-in-out "
          >
            <span className="font-medium text-sm max-sm:text-[13.5px] capitalize dark:bg-purple-800/40 dark:text-white bg-gray-100 shadow-lg text-gray-800 px-4 py-2 rounded-md animate-bounce inline-block ">
              <strong className="mr-3">suggested</strong>{" "}
              {suggestions[currentIndex].suggestion}
            </span>
          </div>
        )}

        <div className="mb-6 w-full px-4 relative ">
          <input
            type="text"
            placeholder="Ask a question..."
            className="dark:bg-purple-800/40 placeholder:text-black dark:placeholder:text-white  w-full py-2 px-4 rounded-md shadow-lg focus:outline-none"
          />
          <ArrowUp
            size={20}
            className={`absolute right-7 top-3 ${
              response ? "opacity-25 cursor-not-allowed" : ""
            } text-purple-200 cursor-pointer hover:text-purple-400`}
          />
        </div>
      </div>
    </div>
  );
};
