import React from 'react';
import ChangeTheme from "./components/ChangeTheme";
import ChangeLang from "./components/ChangeLang";
import Footer from "./components/Footer";
import {useTheme} from "./contexts/ThemeContext";

const Container = () => {
    const {theme} = useTheme();
    return (
        <div className={`contain ${theme === 'dark' ? 'dark': ''}`}>
            <div className="container">
                <ChangeTheme/>
                <ChangeLang />
                <Footer/>
            </div>
        </div>
    );
};

export default Container;