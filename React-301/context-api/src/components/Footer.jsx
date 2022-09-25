import React from 'react';
import {useTheme} from "../contexts/ThemeContext";
import {useLang} from "../contexts/LangContext";

const Footer = () => {
    const {theme, toggleTheme} = useTheme();
    const {lang, setLang} = useLang();

    return (
        <div>
            <hr/>
            <h2>Footer</h2>
            <div>Aktif Tema: {theme}</div>
            <button onClick={toggleTheme}>Temayı Değiştir</button>
            <div>Aktif Dil: {lang}</div>
            <button onClick={() => setLang("tr")}>TR</button>
            <button onClick={() => setLang("de")}>DE</button>
            <button onClick={() => setLang("en")}>EN</button>
        </div>
    );
};

export default Footer;