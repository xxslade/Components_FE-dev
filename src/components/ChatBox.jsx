import React, { useState } from 'react'
import { useEffect, useRef } from 'react';


const ChatBox = () => {
    const [allMessages, setAllMessages] = useState([{ sender: "bot", value: "Hi! How can I help you broooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo?" }]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [tAreaMessage, setTAreaMessage] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [allMessages]);


    const handleSendMessage = (m) => {
        const trimmed = m.trim(); // removes whitespace from both ends
        if (trimmed === '') return;

        const nMessage = [...allMessages, { sender: "human", value: m }]
        setAllMessages(nMessage);
        console.log(nMessage);
        setTAreaMessage('');
    }


    const displayMessage = allMessages.map((value, ind) => {
        if (value['sender'] === 'bot') {
            return (
                // <div key = {ind} className='bg-cyan-100 text-cyan-100 h-80 w-20/21 overflow-y-auto'>
                <div className='m-2 text-black bg-white p-3 rounded-xl shadow-md mb-2 max-w-[80%]  break-words self-start'>
                    {value['value']}
                </div>
                //</div>
            )
        }
        else {
            return (
                //<div key = {ind} className='bg-cyan-100 text-cyan-100 h-80 w-20/21 overflow-y-auto'>
                <div className='m-2 text-black bg-white p-3 rounded-xl shadow-md mb-2 max-w-[80%]  break-words self-end'>
                    {value['value']}
                </div>
                //</div>
            )
        }
    })

    const ExpandedChatBox = (

        <div className="h-105 w-1/5 overflow-y-auto p-2 bg-gray-800 text-white rounded fixed bottom-0 right-0 m-bottom-5">
            <div className='flex flex-col gap-2'>
                <div className="flex justify-between items-center">
                    <span>ChatBox</span>
                    <button onClick={() => {
                        setIsCollapsed(false)
                        console.log(messages[0]['value']);
                    }}>Minimize</button>
                </div>
                <div className='flex justify-center'>
                    <div className='bg-cyan-100 text-cyan-100 h-80 w-20/21 overflow-y-auto p-2 flex flex-col'>
                        {displayMessage}
                        <div ref={bottomRef}></div>
                    </div>

                </div>
                <div className='flex justify-center'>
                    <textarea value={tAreaMessage} className="w-20/21 p-2 text-white bg-gray-700 rounded focus:ring-2 focus:ring-blue-500"
                        rows={1} name="" id="" placeholder='You can write your queries here.' onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey && e.value !== '') {
                                e.preventDefault();
                                handleSendMessage(tAreaMessage);
                            }
                        }} onChange={(e) => setTAreaMessage(e.target.value)}></textarea>
                </div>
            </div>
        </div>
    );

    const CollapsedChatBox = (
        <div className="h-12 w-1/5 p-2 bg-gray-800 text-white rounded fixed bottom-0 right-0">
            <div className="flex justify-between items-center">
                <span className='text-gray-500'>Have doubts understanding code?</span>
                <button onClick={() => setIsCollapsed(true)}>Expand</button>
            </div>
        </div>
    );

    return (
        <>
            {isCollapsed ? ExpandedChatBox : CollapsedChatBox}
        </>

    )
}

export default ChatBox