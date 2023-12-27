import React, { useRef, useCallback, useContext, useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import toast from "react-hot-toast";

import QueryContext from "../../../context/QueryContext";
import ThemeContext from "../../../context/ThemeContext";
import EditorHeader from "../EditorHeader/EditorHeader";

function QueryEditorSection() {
    const {
        selectedQuery: currentQuery,
        setSelectedQuery: setCurrentQuery,
        setQueryResponse: setExecutedQueryResponse,
        addQueryToHistory,
    } = useContext(QueryContext);

    const { darkTheme } = useContext(ThemeContext);
    const editorTheme = "monokai" ;

    const originalQueryText = currentQuery?.query || "";
    const aceEditorReference = useRef(null);

    const copyToClipboard = useCallback(() => {
        if (aceEditorReference.current) {
            const copiedText = aceEditorReference.current.editor.getValue();
            navigator.clipboard
                .writeText(copiedText)
                .then(() => toast.success("Copied!"));
        }
    }, []);

    const executeQuery = () => {
        let currentQueryText = aceEditorReference.current.editor.getValue();
        if (currentQueryText === "") {
            toast("Please select a query!", { icon: "⚠️" });
        } else if (
            currentQueryText.toLowerCase() === originalQueryText.toLowerCase() ||
            currentQueryText.toLowerCase() + ";" === originalQueryText.toLowerCase()
        ) {
            setExecutedQueryResponse(currentQuery?.response);
            addQueryToHistory(currentQuery);
            toast.success("Query executed!");
        } else {
            toast.error("Query modified!");
        }
    };

    const clearEditor = () => {
        aceEditorReference.current.editor.setValue("");
        setCurrentQuery(null);
    };

    useEffect(() => {
        const textInputElements =
            aceEditorReference.current?.editor?.container?.querySelectorAll(
                ".ace_text-input"
            );

        if (textInputElements && textInputElements.length > 0) {
            textInputElements.forEach((input) => {
                input.setAttribute("aria-label", "Code editor input");
            });
        }
    }, []);

    return (
        <section className="flex flex-col">
            <EditorHeader
                onCopy={copyToClipboard}
                onRun={executeQuery}
                clearEditor={clearEditor}
            />
            <div className="overflow-auto z-0">
                <AceEditor
                    key={editorTheme}
                    ref={aceEditorReference}
                    mode="mysql"
                    theme={editorTheme}
                    width="100%"
                    height="1100px"
                    placeholder="-- Write your MySQL queries here..."
                    showPrintMargin={false}
                    fontSize={18}
                    name="SQL-Editor"
                    editorProps={{ $blockScrolling: true }}
                    value={currentQuery?.query || ""}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                    }}
                />
            </div>
        </section>
    );
}

export default QueryEditorSection;
