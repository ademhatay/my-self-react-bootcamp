import React from 'react';
import {ThemeContextProvider} from "./contexts/ThemeContext";
import {LangContextProvider} from "./contexts/LangContext";
import Container from "./Container";

const App = () => (
    <div>
        <LangContextProvider>
            <ThemeContextProvider value="light">
                <Container/>
            </ThemeContextProvider>
        </LangContextProvider>
    </div>
);

export default App;