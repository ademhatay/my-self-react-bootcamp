import {createContext,useContext, useState, useEffect} from "react";

const LangContext = createContext();

const defaultLang = localStorage.getItem("lang") || "tr";

export const LangContextProvider = ({children}) => {
    const [lang, setLang] = useState(defaultLang);

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const values = {
        lang,
        setLang
    }
    return <LangContext.Provider value={values}>{children}</LangContext.Provider>
}

export const useLang = () => {
    return useContext(LangContext);
}

export default LangContext;