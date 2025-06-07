import React from 'react';

function HomePageCard({ picture, heading, content, linkText }) {
  return (
    <div className="flex flex-col items-start gap-3 p-4 rounded-md w-full max-w-xs ml-10 mr-10 ">
      <img src={picture} alt="icon" className="w-14 h-14 mb-4 " />
      <p className="text-3xl font-semibold font-cormorant text-white">{heading}</p>
      <p className="text-lg font-sans text-gray-300">{content}</p>
      {/* {linkText && (
        <button className="text-sm text-white mt-2 hover:underline">
          {linkText} →
        </button>
      )} */}
    </div>
  );
}

export default HomePageCard;
