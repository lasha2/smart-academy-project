"use client";
import { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import styles from "./Navbar.module.css";

const DATA = [
  { id: 1, title: "HTML", link: "html" },
  { id: 2, title: "CSS", link: "css" },
  { id: 3, title: "JavaScript", link: "javascript" },
  { id: 4, title: "Python", link: "python" },
  { id: 5, title: "SQL", link: "sql" },
  { id: 6, title: "C++", link: "c++" },
  { id: 7, title: "C#", link: "c#" },
];

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("HTML");

  return (
    <>
      <div className={styles.container}>
        {DATA.map((item) => (
          <NavBarItem
            key={item.id}
            item={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </>
  );
};

export default NavBar;
