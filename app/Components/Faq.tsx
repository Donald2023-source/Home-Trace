"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const Faq = () => {
  const [view, setView] = useState<number | null>(null);

  const handleView = (id: number) => {
    setView(view === id ? null : id);
  };

  const Faq = [
    {
      name: "What is Home Trace",
      text: "Home Trace is a modern real estate platform that helps you easily find, explore, and connect with trusted property listings. Whether you’re looking to rent, buy, or invest, we provide a seamless experience to match you with the right property.",
      id: 1,
    },
    {
      name: "Are all listings verified?",
      text: "Yes. Every property listed on Home Trace goes through a verification process to ensure accuracy and authenticity. Our goal is to protect users from scams and give you peace of mind when searching for your next home.",
      id: 2,
    },
    {
      name: "How do I contact an Agent?",
      text: "Each property listing includes the agent’s contact information. You can reach out directly through the “Contact Agent” button, which allows you to call, message, or schedule a visit depending on your preference.",
      id: 3,
    },
    {
      name: "What if I don’t find a property I like?",
      text: "If you don’t find a property that suits your needs, you can set up alerts to be notified when new listings matching your preferences become available. You can also reach out to our support team or an agent for personalized assistance.",
      id: 4,
    },
  ];

  return (
    <div className="my-4 lg:px-0 px-3 md:px-4">
      <h2 className="text-xl font-bold text-primary/70">
        Frequently Asked Questions (FAQ)
      </h2>
      <div>
        {Faq.map((item) => (
          <div
            onClick={() => handleView(item.id)}
            key={item.id}
            className="my-4 border px-3 py-2 rounded cursor-pointer"
          >
            <div className="flex items-center justify-between py-3">
              <h3 className="text-sm">{item.name}</h3>
              <ChevronRight
                className={`transition-transform duration-300 ${
                  view === item.id ? "rotate-90" : ""
                }`}
              />
            </div>

            {view === item.id && (
              <p className="text-sm text-gray-500 w-[90%] leading-6 font-light py-2">
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
