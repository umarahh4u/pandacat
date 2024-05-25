import React, { createContext, useState } from "react";

export const LanguageContext = createContext("ENG");

const LanguageContextProvider = (props: any) => {
  const [languageSalect, setLangaugeSelect] = useState("");

  return (
    <LanguageContext.Provider value={languageSalect}>
      {props.children}
    </LanguageContext.Provider>
  );
};
export default LanguageContextProvider;
