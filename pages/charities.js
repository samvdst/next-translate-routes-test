import { useRouter } from "next/router";
import React from "react";
import LanguageSwitcher from "../components/languageSwitcher";
import CurrentLocale from "../components/CurrentLocale";
import Navigation from "../components/Navigation";

function Charities() {
  const router = useRouter();
  return (
    <div>
      <LanguageSwitcher />
      <br />
      <Navigation />
      <br />
      <div>Charities Page</div>
      <CurrentLocale />
    </div>
  );
}

export default Charities;
