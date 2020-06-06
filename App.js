import React from "react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

const App = (Component) => {
    return (
        <ThemeProvider>
            <CSSReset />
            <ColorModeProvider>
                <Component />
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default App;