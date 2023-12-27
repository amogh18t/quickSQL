import React from "react";
import { BiCopy, BiPlay } from "react-icons/bi";
import { Toaster } from "react-hot-toast";
import QueryContent from "./Queries/QueryContent";
function EditorHeader({ onCopy, onRun, clearEditor }) {
  return (
    <div>
      <div>
        <QueryContent />
      </div>
      <header className="flex justify-between items-center bg-slate-50 py-4 px-4 border-b-2 border-indigo-50 dark:border-gray-700 dark:bg-gray-800">
        <span className="pl-4 text-lg font-medium dark:text-white">Editor</span>
        <div className="flex items-center gap-6 pr-4">
          <BiCopy
            className="text-indigo-500 text-2xl cursor-pointer dark:text-indigo-400"
            onClick={onCopy}
          style={{ color: "green" }}
          />
          <Toaster position="top-center" />
          <button
            type="button"
            className="flex items-center justify-center gap-1 bg-transparent font-medium"
            onClick={clearEditor}
          >
            <span
              className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
              style={{ color: "green" }}
            >
              Clear
            </span>
          </button>
          <button
            type="button"
            className="flex gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium py-0.5 pl-1 pr-4 rounded"
            style={{ backgroundColor: "green" }}
            onClick={onRun}
          >
            <BiPlay className="text-2xl" />
            <span>Run</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default EditorHeader;
