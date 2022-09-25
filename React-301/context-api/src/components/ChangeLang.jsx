import React from 'react';
import {useLang} from "../contexts/LangContext";


const ChangeLang = () => {
    const {lang, setLang} = useLang();
    return (
        <div>
            <hr/>
            <div>aktif Dil: {lang}</div>
            <button onClick={() => setLang("tr")}>TR</button>
            <button onClick={() => setLang("de")}>DE</button>
            <button onClick={() => setLang("en")}>EN</button>
        </div>
    );
};

export default ChangeLang;