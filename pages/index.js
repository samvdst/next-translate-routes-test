import React from "react";
import { useRouter } from "next/router";
import LanguageSwitcher from "../components/languageSwitcher";
import CurrentLocale from "../components/CurrentLocale";
import Navigation from "../components/Navigation";

function Home() {
  const router = useRouter();
  return (
    <div>
      <LanguageSwitcher />
      <br />
      <Navigation />
      <br />
      <div>Home Page</div>
      <CurrentLocale />
    </div>
  );
}

export default Home;
