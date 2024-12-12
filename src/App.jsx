/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { requestToAi } from "./utils/AI";
import "./app.css";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import gif from "/public/gif.gif";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const question = async () => {
    setIsLoading(true);
    try {
      const ai = await requestToAi(content.value);
      setData(ai);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 container flex flex-col min-h-[80vh] justify-center items-center">
      <div className="text-5xl text-indigo-800 ">
        <h1>GROQ|AI</h1>
      </div>
      {isLoading ? (
        <img src={gif} alt="Loading..." className="w-20 h-20 mt-5" />
      ) : data ? (
        <SyntaxHighlighter
          className="chat"
          language="javascript"
          wrapLongLines={true}
          style={darcula}
          customStyle={{
            backgroundColor: "#1e1b4b",
            color: "white",
            marginTop: "5vh",
          }}
        >
          {data.toString()}
        </SyntaxHighlighter>
      ) : null}
      <div className="">
        <form>
          <input
            className="rounded-md mb-5 mt-5 w-64 p-3"
            type="text"
            placeholder="Ask Something...."
            id="content"
          />
        </form>
        <button
          className="button text-white border-2 py-1 px-5 rounded-md bg-indigo-700"
          onClick={question}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default App;
