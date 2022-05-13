import { Link } from "next-translate-routes";
import React from "react";

const LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Causes",
    href: "/causes",
  },
  {
    name: "Charities",
    href: "/charities",
  },
];

function Navigation() {
  return (
    <div>
      <ul>
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
