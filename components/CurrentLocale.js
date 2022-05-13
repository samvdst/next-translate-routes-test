import { useRouter } from "next/router";
import React from "react";

function CurrentLocale() {
  const router = useRouter();
  return <div>Current Locale: {router.locale}</div>;
}

export default CurrentLocale;
