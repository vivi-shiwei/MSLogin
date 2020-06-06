import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App = (Component) => {
    return (
        <ThemeProvider>
            <CSSReset />
            <Component />
        </ThemeProvider>
    );
}

export default App;