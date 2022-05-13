import React from "react";
import { useRouter } from "next/router";
import LanguageSwitcher from "../components/languageSwitcher";
import CurrentLocale from "../components/CurrentLocale";
import Navigation from "../components/Navigation";

function Causes() {
  const router = useRouter();
  return (
    <div>
      <LanguageSwitcher />
      <br />
      <Navigation />
      <br />
      <div>Causes Page</div>
      <CurrentLocale />
    </div>
  );
}

export default Causes;
