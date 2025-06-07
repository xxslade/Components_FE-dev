import React, { useState, useEffect } from "react";
import * as Babel from "@babel/standalone";
import Editor from "@monaco-editor/react";

export default function DynamicCompiler({defaultCode}) {
  console.log(defaultCode);
  const [jsxCode, setJsxCode] = useState(defaultCode);
  const [Comp, setComp] = useState(null); 
  const [error, setError] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");

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
    try{
      await navigator.clipboard.writeText(jsxCode);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 1500);
    }catch(err){
      setCopyStatus("Failed to copy!");
    }
  };

  return (
    <div className="p-4 space-y-6 flex flex-col">
      
      <div className="w-7/7 border p-6 rounded bg-white shadow min-h-[4rem]">
        {Comp ? <Comp /> : <p className="text-red-600">{error || "Nothing to render"}</p>}
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

    
    </div>
  );
}
