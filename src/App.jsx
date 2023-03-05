import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
// import { FormContext } from "./core/context/FormContext";

import { Layout } from "./views/Layout/Layout";
import { ErrorPage } from "./views/ErrorPage/ErrorPage";

import { HomePage } from "./pages/HomePage/HomePage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { DevelopmentPage } from "./pages/DevelopmentPage/DevelopmentPage";
import { ContextPage } from "./pages/ContextPage/ContextPage";
import { SeoPage } from "./pages/SeoPage/SeoPage";
import { TargetPage } from "./pages/TargetPage/TargetPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import { useState } from "react";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setIsLoading(false);
    }, 1500);
  }

  return (
    !isLoading && (
      // <FormContext.Provider>
      <HashRouter>
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="development" element={<DevelopmentPage />} />
              <Route path="context" element={<ContextPage />} />
              <Route path="seo" element={<SeoPage />} />
              <Route path="target" element={<TargetPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            </Route>
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </>
      </HashRouter>
      // </FormContext.Provider>
    )
  );
};
