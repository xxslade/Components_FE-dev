import React, { useState } from "react";
import buttonTemplates from "../designs/buttonTemplates";
import cardTemplates from "../designs/cardTemplates";
import navTemplates from "../designs/navTemplates";
import sidebarTemplates from "../designs/sidebarTemplates";
import footerTemplates from "../designs/footerTemplates";
import DynamicCompiler from "./DynamicCompiler";

const componentsLibrary = {
  Navbar: navTemplates,
  Button: buttonTemplates,
  Card: cardTemplates,
  Sidebar : sidebarTemplates,
  Footer : footerTemplates
};

function Playground_sidebar({ setCompoIsDragged }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="w-120 bg-[#4B3A40] text-white p-4 space-y-4 h-[75vw] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Component Library</h2>

      {Object.keys(componentsLibrary).map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className="w-full text-left p-2 hover:bg-[#6D4C57] rounded"
        >
          {category}
        </button>
      ))}

      {selectedCategory && (
        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold">{selectedCategory} Designs</h3>

          {Object.entries(componentsLibrary[selectedCategory]).map(
            ([designName, code]) => (
              <div className="bg-white text-black p-2 rounded cursor-grab">
                {/* Component name */}
                <div className="text-center text-sm font-semibold mb-2">
                  {designName}
                </div>

                {/* Live Preview using DynamicCompiler */}
                <div
                  key={designName}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData("componentCode", code);
                    e.dataTransfer.setData("componentType", selectedCategory);
                    setCompoIsDragged(true);
                  }}
                  className="border p-4 rounded bg-gray-50 overflow-x-auto max-w-full flex justify-center transform scale-90 "
                >
                  <DynamicCompiler defaultCode={code} previewOnly={true} />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Playground_sidebar;
