import React from 'react';
import {useTheme} from "../contexts/ThemeContext";

const ChangeTheme = () => {

    const {theme, toggleTheme} = useTheme()

    return <>
        <div>Aktif Tema: {theme} </div>
        <button onClick={toggleTheme}>Temayı Değiştir</button>
    </>
};

export default ChangeTheme;