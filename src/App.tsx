import Router from "./routes";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messagesEn from "./lang/en.json";
import messagesEs from "./lang/es.json";
import { useState, useEffect } from "react";


function getLocale(){
  if (navigator.language === "es-CL") {
    return "es-CL";
  } else if (navigator.language === "en-US") {
    return "en-US";
  }else{
    return "es-CL";
}

}
const initLocale = getLocale()

function loadMessages(locale: string):typeof messagesEs {
  switch (locale) {
    case "es-CL":
      return messagesEs;
    case "en-US":
      return messagesEn;
    default:
      return messagesEs;
  }
}

function App() {
  const [locale, setLocale] = useState(initLocale);
  const [messages, setMessages] = useState(loadMessages(initLocale));

  useEffect(() => {
    setMessages(loadMessages(locale));
  }, [locale]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <IntlProvider defaultLocale="es-CL" locale={initLocale} messages={messages}>
          <Router locale={locale} onLocaleChange={(locale:string) => setLocale(locale)} />
        </IntlProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
