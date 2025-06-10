import React, { useState, useEffect, useContext } from "react";
import * as Babel from "@babel/standalone";
import Editor from "@monaco-editor/react";
import { GlobalContext } from "../context/GlobalContext";

export default function DynamicCompiler({ defaultCode, previewOnly = false }) {
  const [jsxCode, setJsxCode] = useState(defaultCode);
  const [Comp, setComp] = useState(null);
  const [error, setError] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");

  const { setIsCollapsed, handleSendMessage } = useContext(GlobalContext);

  const handleExplainAIbutton = () => {
    const message = jsxCode + " can you explain this?";
    handleSendMessage(message);
    setIsCollapsed(true);
  };

  useEffect(() => {
    try {
      setError(null);
      const wrappedJsx = `(() => (${jsxCode}))()`;

      const output = Babel.transform(wrappedJsx, {
        presets: ["react"],
        plugins: ["transform-react-jsx"],
      }).code;

      const fn = new Function("React", `return ${output}`);
      const result = fn(React);

      const DynamicComponent = () => result;
      setComp(() => DynamicComponent);
    } catch (err) {
      setError(err.message);
      setComp(null);
    }
  }, [jsxCode]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsxCode);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 1500);
    } catch (err) {
      setCopyStatus("Failed to copy!");
    }
  };

 
  if (previewOnly) {
    return Comp ? <Comp /> : <p className="text-red-600">{error || "Nothing to render"}</p>;
  }

  
  return (
    <div className="p-1 space-y-6 flex flex-col">
      <div className="w-full border p-5 rounded shadow min-h-[4rem] bg-[#a30e33] flex items-center justify-between gap-4">
        <div className="flex-grow min-w-0 overflow-x-auto pr-4">
          {Comp ? <Comp /> : <p className="text-red-600">{error || "Nothing to render"}</p>}
        </div>
      </div>

      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute -top-8 right-0 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm shadow"
        > 
          {copyStatus || "Copy"}
        </button>

        <div className="h-[20vw] border rounded overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            value={jsxCode}
            onChange={(value) => setJsxCode(value || "")}
            theme="vs-dark"
            options={{
              wordWrap: 'on',
              wrappingIndent: 'same',
              fontSize: 14,
              minimap: { enabled: false },
              fontFamily: "monospace",
            }}
          />
        </div>
      </div>

      <div className="shrink-0 flex justify-center">
        <button
          onClick={handleExplainAIbutton}
          className="text-[#2A0A12] bg-yellow-400 hover:bg-yellow-500 hover:scale-[1.03] focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-semibold rounded-xl text-base px-6 py-3 transition-transform duration-200 shadow-lg hover:shadow-yellow-400/50 whitespace-nowrap"
        >
          Explain With AI
        </button>
      </div>
    </div>
  );
}
