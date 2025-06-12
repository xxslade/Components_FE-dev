import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [allMessages, setAllMessages] = useState([{ role: "assistant", content: "Hi! How can I help you?" }]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [tAreaMessage, setTAreaMessage] = useState('');
  const gridLength = 960
  const gridWidth = 960
  const gridDivisions = 10;

  const handleSendMessage = (m) => {

    const trimmed = m.trim(); // removes whitespace from both ends
    if (trimmed === '') return;



    const nMessage = [...allMessages, { role: "user", content: m }]
    setAllMessages(nMessage);
    //console.log(nMessage);
    setTAreaMessage('');
    const handleSubmit = async () => {
      const userMessages = nMessage;

      try {
        const response = await fetch("http://localhost:4000/api/v1/explain", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userMessages),
        });

        const data = await response.json();
        setAllMessages(prev => [...prev, { role: "assistant", content: data.message }]);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    handleSubmit();
  }

  const handleGenerateLayout = () => {

    // const trimmed = m.trim(); // removes whitespace from both ends
    // if (trimmed === '') return;


    const nMessage = [{
      "role": "user",
      "content": "code: '<button className='bg-blue-500 text-white px-4 py-2 rounded'>Click Me</button>' x: 100 y: 50"
    }, {
      "role": "user",
      "content": "code: '<nav className='bg-gray-800 text-white p-4'>Navbar</nav>' x: 150 y: 250"
    }
    ]

    const handleSubmit = async () => {
      const userMessages = nMessage;

      try {
        const response = await fetch("http://localhost:4000/api/v1/explain", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userMessages),
        });

        const data = await response.json();
        console.log(data.code);
        
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    handleSubmit();
  }

  const sharedValue = {
    allMessages,
    setAllMessages,
    isCollapsed,
    setIsCollapsed,
    tAreaMessage,
    setTAreaMessage,
    handleSendMessage,
    gridLength,
    gridWidth,
    gridDivisions,
    handleGenerateLayout
  }

  return (
    <GlobalContext.Provider value={sharedValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
