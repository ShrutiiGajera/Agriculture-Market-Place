import { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      } else {
        console.error("Google Translate API is not available.");
      }
    };

    // Check if the Google Translate script is already loaded
    if (!window.google || !window.google.translate) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }

    // Clean up function to remove the script when the component unmounts
    return () => {
      const elements = document.querySelectorAll('script[src*="googleTranslateElementInit"]');
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default LanguageSwitcher;
