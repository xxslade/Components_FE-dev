import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';


const ChatBox = () => {
    const { allMessages,
        setAllMessages,
        isCollapsed,
        setIsCollapsed,
        tAreaMessage,
        setTAreaMessage,
        handleSendMessage } = useContext(GlobalContext);

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [allMessages]);





    const displayMessage = allMessages.map((value, ind) => {
        if (value['role'] === 'assistant') {
            return (
                // <div key = {ind} className='bg-cyan-100 text-cyan-100 h-80 w-20/21 overflow-y-auto'>
                <div key={ind} className='m-2 text-black bg-white p-3 rounded-xl shadow-md mb-2 max-w-[80%]  break-words self-start'>
                    {value['content']}
                </div>
                //</div>
            )
        }
        else {
            return (
                //<div key = {ind} className='bg-cyan-100 text-cyan-100 h-80 w-20/21 overflow-y-auto'>
                <div key={ind} className='m-2 text-black bg-white p-3 rounded-xl shadow-md mb-2 max-w-[80%]  break-words self-end'>
                    {value['content']}
                </div>
                //</div>
            )
        }
    })

    const ExpandedChatBox = (

        <div className="h-145 w-1/4 overflow-y-auto p-2 bg-[#250812] text-white rounded fixed bottom-0 right-0 shadow-xl border border-[#51141e]">
            <div className="flex flex-col gap-3 h-full">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <span className="text-yellow-300 font-bold">ChatBox</span>
                    <button
                        onClick={() => setIsCollapsed(false)}
                        className="text-xs bg-[#FACC15] hover:bg-[#fde047] text-[#3E0B18] px-2 py-1 rounded font-semibold shadow hover:scale-105 transition-all duration-150"
                    >
                        Minimize
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-1">
                    {allMessages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex mb-2 ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                        >
                            <div
                                className={`max-w-[80%] px-4 py-2 rounded-lg shadow-md text-sm ${msg.role === 'assistant'
                                        ? 'bg-[#51141e] text-white'
                                        : 'bg-[#FACC15] text-[#3E0B18]'
                                    }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    <div ref={bottomRef}></div>
                </div>

                {/* Input */}
                <div className="flex justify-center">
                    <textarea
                        value={tAreaMessage}
                        className="w-full p-2 text-white bg-[#3E0B18] rounded resize-none focus:ring-2 focus:ring-yellow-400 placeholder:text-yellow-200"
                        rows={1}
                        placeholder="You can write your queries here."
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey && e.value !== '') {
                                e.preventDefault();
                                handleSendMessage(tAreaMessage);
                            }
                        }}
                        onChange={(e) => setTAreaMessage(e.target.value)}
                    />
                </div>
            </div>
        </div>


    );

    const CollapsedChatBox = (
        <div className="h-12 w-1/5 p-2 bg-[#250812] text-white rounded fixed bottom-0 right-0 shadow-lg border border-[#51141e]">
            <div className="flex justify-between items-center">
                <span className="text-yellow-300 font-medium">Have doubts?</span>
                <button
                    onClick={() => setIsCollapsed(true)}
                    className="text-xs bg-[#FACC15] hover:bg-[#FDE047] text-[#3E0B18] px-3 py-1 rounded font-semibold shadow hover:scale-105 transition-all duration-150"
                >
                    Expand
                </button>
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