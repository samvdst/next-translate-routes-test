import { Link } from "next-translate-routes";
import { useRouter } from "next/router";
import React from "react";

function LanguageSwitcher() {
  const router = useRouter();
  const LANGS = ["en", "de"];
  return (
    <div>
      {LANGS.map((lang) => (
        <Link key={lang} href={router.asPath} locale={lang}>
          <a>{lang}</a>
        </Link>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
