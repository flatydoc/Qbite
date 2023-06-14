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
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./App.module.scss";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    // <FormContext.Provider>
    <BrowserRouter>
      {isLoading ? (
        <div className={styles.loader}>
          <ClipLoader
            color={"#05d9e8"}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
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
      )}
    </BrowserRouter>
    // </FormContext.Provider>
  );
};
