import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

import useDarkMode from "./components/useDarkMode";
import ThemeContext from "./context/ThemeContext";

function App() {
    const [darkTheme, setDarkTheme] = useDarkMode();

    return (
        <ThemeContext.Provider
            value={{
                darkTheme,
                setDarkTheme,
            }}
        >
            <div className="flex flex-col h-screen">
                <Navbar />
                <Body />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
