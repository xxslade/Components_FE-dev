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
        console.log(nMessage);
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
      gridDivisions
    }

  return (
    <GlobalContext.Provider value={sharedValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
